package com.myorg.service

import com.myorg.model.BankAccount
import com.myorg.model.OperationResult
import com.myorg.model.TransferRequest
import com.myorg.repository.BankAccountRepository
import spock.lang.Specification

class DefaultOperationServiceTest extends Specification {

    private DefaultOperationService defaultOperationService
    private BankAccountRepository bankAccountRepository

    private account1 = new BankAccount()
    private account2 = new BankAccount()


    def setup() {
        account1.accountId = 1001
        account1.balance = new BigDecimal(3000)
        account1.accountName = "Payday"

        account2.accountId = 2001
        account2.balance = new BigDecimal(1000)
        account2.accountName = "Savings"

        bankAccountRepository = Mock(BankAccountRepository.class)
        defaultOperationService = new DefaultOperationService(bankAccountRepository)
    }

    def "test transfer"() {
        given: "accounts 1001 and 2001 exists with 3,000 PEN and 1,000 PEN in balance"
        bankAccountRepository.findById(1001) >> Optional.of(account1)
        bankAccountRepository.findById(2001) >> Optional.of(account2)

        when: "account 1001 transfers 1,000 PEN to account 2001"
        TransferRequest request = new TransferRequest()
        request.transferId = 1
        request.amount = new BigDecimal(1000)
        request.sourceAccountId = 1001
        request.destinationAccountId = 2001

        then: "transfer should have result SUCCESSFUL"
        request.operationResult == null
        TransferRequest result = defaultOperationService.transfer(request)
        result.operationResult == OperationResult.SUCCESSFUL
    }
}

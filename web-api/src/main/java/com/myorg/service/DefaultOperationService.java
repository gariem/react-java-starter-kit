package com.myorg.service;

import com.myorg.exception.BusinessException;
import com.myorg.model.BankAccount;
import com.myorg.model.OperationResult;
import com.myorg.model.TransferRequest;
import com.myorg.repository.BankAccountRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class DefaultOperationService implements OperationService {

    private static final Logger LOGGER = LoggerFactory.getLogger(DefaultOperationService.class);

    BankAccountRepository bankAccountRepository;

    @Autowired
    public DefaultOperationService(BankAccountRepository bankAccountRepository) {
        this.bankAccountRepository = bankAccountRepository;
    }

    /***
     * Executes a transfer requests including verifications for both origin and destination accounts.
     * @param request Wrapper object containing info about the transfer request such as origin, destination, and ammount.
     * @return the same request object with result
     */
    @Override
    @Transactional
    public TransferRequest transfer(TransferRequest request) {
        LOGGER.info("Start processing request: " + request.toString());
        // Step 1: Verify origin account and balance
        BankAccount origin = getBankAccount(request.getSourceAccountId());
        if (origin.getBalance().compareTo(request.getAmount()) == -1) {
            throw new BusinessException("Origin account doesn't have enough money.");
        }
        // Step 2: Verify destination account
        BankAccount destination = getBankAccount(request.getDestinationAccountId());
        // Step 3: Update origin and destination accounts
        origin.setBalance(origin.getBalance().subtract(request.getAmount()));
        destination.setBalance(destination.getBalance().add(request.getAmount()));
        bankAccountRepository.save(origin);
        bankAccountRepository.save(destination);
        // Step 4: Update request status
        request.setOperationResult(OperationResult.SUCCESSFUL);
        request.setOperationMessage("Transfer completed");
        return request;
    }

    /***
     * Attempts to retrieve a bank account object using the bank account id as parameter.
     * @param id Bank account ID
     * @return BankAccount
     */
    private BankAccount getBankAccount(int id) {
        LOGGER.info("Querying account with id: " + id);
        BankAccount account;
        Optional<BankAccount> optionalAccount = bankAccountRepository.findById(id);
        if (!optionalAccount.isPresent()) {
            throw new BusinessException("Incorrect account: " + id);
        } else {
            account = optionalAccount.get();
        }
        return account;
    }
}

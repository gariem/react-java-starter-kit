package com.myorg.controller

import com.myorg.exception.ApiException
import com.myorg.exception.BusinessException
import com.myorg.model.TransferRequest
import com.myorg.service.OperationService
import spock.lang.Specification

class OperationControllerTest extends Specification {

    private OperationController operationController
    private OperationService operationService

    def setup() {
        operationService = Mock()
        operationController = new OperationController(operationService)
    }

    def "test test"() {
        when: "test is called"
        String response = operationController.test()

        then: "response contains data"
        !response.isEmpty()
    }

    def "test executeTransfer throws error"() {
        given: "Request contains any values"
        TransferRequest request = new TransferRequest()

        when: "service throws BusinessException"
        1 * operationService.transfer(_) >> { throw new BusinessException("Default") }
        operationController.executeTransfer(request)

        then: "controller throws ApiException"
        thrown ApiException

    }
}

package com.myorg.controller;

import com.myorg.exception.ApiException;
import com.myorg.exception.BusinessException;
import com.myorg.model.TransferRequest;
import com.myorg.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping(path = "/api/operations")
public class OperationController {

    private OperationService operationService;

    @Autowired
    public OperationController(OperationService operationService) {
        this.operationService = operationService;
    }

    @RequestMapping
    public String test() {
        return new Date().toString();
    }

    @RequestMapping(path = "/transferRequests", method = RequestMethod.POST)
    public TransferRequest executeTransfer(@RequestBody TransferRequest request) {
        try {
            return operationService.transfer(request);
        } catch (BusinessException businessException) {
            throw new ApiException(businessException.getMessage(), businessException);
        } catch (Exception exception) {
            throw exception;
        }
    }
}

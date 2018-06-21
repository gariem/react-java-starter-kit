package com.myorg.controller.advice;

import com.myorg.exception.ApiException;
import com.myorg.exception.ApplicationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    private static final String BUSINESS_EXCEPTION = "Business Rules";

    @ExceptionHandler(value = {ApiException.class})
    protected ResponseEntity<Object> handleBusinessException(ApplicationException ex, WebRequest request) {
        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("category", BUSINESS_EXCEPTION);
        responseBody.put("message", ex.getMessage());
        return handleExceptionInternal(ex, responseBody, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

}

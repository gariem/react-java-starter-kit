package com.myorg.exception;

public class BusinessException extends ApplicationException {

    public BusinessException(String message) {
        this(message, null);
    }

    public BusinessException(String message, Throwable cause) {
        super(message, cause);
    }
}

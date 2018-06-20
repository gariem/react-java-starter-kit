package com.myorg.exception;

public class ApplicationException extends RuntimeException {


    public ApplicationException(String message) {
        this(message, null);
    }

    public ApplicationException(String message, Throwable cause) {
        super(message, cause);

    }

}

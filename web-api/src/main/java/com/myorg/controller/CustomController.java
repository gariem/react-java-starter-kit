package com.myorg.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping(path = "/api/transactions")
public class CustomController {

    @RequestMapping(path = "/date")
    public String helloWorld() {
        return new Date().toString();
    }
}

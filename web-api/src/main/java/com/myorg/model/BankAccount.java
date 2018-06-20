package com.myorg.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;

@Data
@Entity
public class BankAccount {

    @Id
    private int accountId;
    private String accountName;
    private BigDecimal balance;
}

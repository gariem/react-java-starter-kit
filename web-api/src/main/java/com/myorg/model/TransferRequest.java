package com.myorg.model;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;

@Data
@ToString
@Entity
public class TransferRequest {

    @Id
    private int transferId;
    private int sourceAccountId;
    private int destinationAccountId;
    private BigDecimal amount;
    private OperationResult operationResult;
    private String operationMessage;
}

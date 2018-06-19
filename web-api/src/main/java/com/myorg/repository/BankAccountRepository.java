package com.myorg.repository;

import com.myorg.model.BankAccount;
import org.springframework.data.repository.CrudRepository;

public interface BankAccountRepository extends CrudRepository<BankAccount, Integer> {
}

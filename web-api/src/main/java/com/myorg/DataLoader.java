package com.myorg;

import com.myorg.model.BankAccount;
import com.myorg.model.Task;
import com.myorg.repository.BankAccountRepository;
import com.myorg.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    TaskRepository taskRepository;

    @Autowired
    BankAccountRepository bankAccountRepository;

    @Override
    public void run(String... args) {

        for (int i = 0; i < 5; i++) {
            Task task = new Task();
            task.setTaskId(i);
            task.setDescription("Generated task " + i);
            task.setAssignee("N/A");
            task.setCompleted(false);
            taskRepository.save(task);
        }

        BankAccount bankAccount1 = new BankAccount();
        bankAccount1.setAccountId(1001);
        bankAccount1.setBalance(new BigDecimal(8000));
        bankAccount1.setAccountName("Payday");

        BankAccount bankAccount2 = new BankAccount();
        bankAccount2.setAccountId(2001);
        bankAccount2.setBalance(new BigDecimal(2000));
        bankAccount2.setAccountName("Savings");

        bankAccountRepository.save(bankAccount1);
        bankAccountRepository.save(bankAccount2);
    }
}

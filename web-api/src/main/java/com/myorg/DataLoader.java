package com.myorg;

import com.myorg.model.Task;
import com.myorg.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    TaskService service;

    @Override
    public void run(String... args) throws Exception {

        for (int i = 0; i < 10; i++) {
            Task task = new Task();
            task.setTaskId(i);
            task.setDescription("Generated task " + i);
            task.setAssignee("N/A");
            task.setCompleted(false);
            service.createTask(task);
        }
    }
}

package com.myorg.service;

import com.myorg.model.Task;
import com.myorg.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    @Autowired
    TaskRepository repository;

    public Task createTask(Task task) {
        return repository.save(task);
    }

    public Task completeTask(Task task) {
        task.setCompleted(true);
        return repository.save(task);
    }

    public void removeTask(Task task) {
        repository.delete(task);
    }
}

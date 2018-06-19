package com.myorg.service;

import com.myorg.model.Task;

public interface TaskService {

    Task createTask(Task task);

    Task createTaskWithRules(Task task);

    Task closeRandomTask();
}

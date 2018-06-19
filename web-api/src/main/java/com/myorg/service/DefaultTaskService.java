package com.myorg.service;

import com.myorg.exception.BusinessException;
import com.myorg.model.Task;
import com.myorg.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefaultTaskService implements TaskService {

    private static String ANOTHER_TASK_EXISTS_WITH_DESCRIPTION = "A task with the same description already exists";
    TaskRepository taskRepository;

    @Autowired
    public DefaultTaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    /***
    * For educational purposes only: creating a task requires that no other task has the same description.
    * Additionally, the description string has to follow certain rules:
    * - Starts with Upper Case letter (A-Z)
    * - Length is between 5 and 15 characters length.
    * This can be accomplished using validation annotations as well
    */
    public Task createTaskWithRules(Task task) {
        if (taskExistsWithDescription(task.getDescription())) {
            throw new BusinessException(ANOTHER_TASK_EXISTS_WITH_DESCRIPTION);
        }
        return this.createTask(task);
    }

    public Task closeRandomTask() {
        return null;
    }

    private boolean taskExistsWithDescription(String description) {
        return taskRepository.findAllByDescriptionIgnoreCase(description).size() > 0;
    }

}

package com.myorg.repository;

import com.myorg.model.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Integer> {

    List<Task> findAllByDescriptionIgnoreCase(String description);

}

package com.myorg.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Task {

    @Id
    private int taskId;
    private String description;
    private String assignee;
    private boolean completed;
}

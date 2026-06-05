package com.agrocloud.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private boolean isCompleted;
    private String taskType; 

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "crop_id")
    private Crop crop;

    protected Task() {}

    public Task(String description, String taskType, Crop crop) {
        this.description = description;
        this.taskType = taskType;
        this.crop = crop;
        this.isCompleted = false;
    }

    public void markAsCompleted() {
        if (this.isCompleted) throw new IllegalStateException("Tarefa já concluída.");
        this.isCompleted = true;
    }

    public Long getId() { return id; }
    public String getDescription() { return description; }
    public boolean isCompleted() { return isCompleted; }
    public String getTaskType() { return taskType; }
}
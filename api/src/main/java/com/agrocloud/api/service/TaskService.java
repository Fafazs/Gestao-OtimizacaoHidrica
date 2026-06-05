package com.agrocloud.api.service;

import com.agrocloud.api.model.Task;
import com.agrocloud.api.repository.TaskRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Transactional
    public void completeDailyTask(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada. ID: " + taskId));

        task.markAsCompleted();

        taskRepository.save(task);
    }
    
    @Transactional(readOnly = true)
    public List<Task> getPendingTasksForCrop(Long cropId) {
        return taskRepository.findByCropIdAndIsCompletedFalse(cropId);
    }
}
package com.agrocloud.api.controller;

import com.agrocloud.api.model.Field;
import com.agrocloud.api.model.Task;
import com.agrocloud.api.service.AgroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/fields")
@CrossOrigin(origins = "*")
public class FieldController {

    private final AgroService agroService;

    public FieldController(AgroService agroService) {
        this.agroService = agroService;
    }

    @GetMapping("/status-overview")
    public ResponseEntity<List<Map<String, Object>>> getStatusOverview() {
        Long mockUserId = 1L;
        List<Field> fields = agroService.getUserFields(mockUserId);
        List<Map<String, Object>> overviewList = new ArrayList<>();

        for (Field f : fields) {
            List<Task> tasks = agroService.getTasksByField(f.getId());
            long totalTasks = tasks.size();
            long completedTasks = tasks.stream().filter(t -> t.getStatus().equals("CONCLUIDO")).count();
            boolean isFullyCompleted = totalTasks > 0 && totalTasks == completedTasks;

            overviewList.add(Map.of(
                "fieldId", f.getId(),
                "fieldName", f.getName(),
                "cropName", f.getCropName(),
                "totalTasksToday", totalTasks,
                "completedTasksToday", completedTasks,
                "isFullyCompleted", isFullyCompleted
            ));
        }

        return ResponseEntity.ok(overviewList);
    }
}
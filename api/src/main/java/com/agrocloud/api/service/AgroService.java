package com.agrocloud.api.service;

import com.agrocloud.api.model.*;
import com.agrocloud.api.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class AgroService {

    private final UserRepository userRepo;
    private final CropRepository cropRepo;
    private final TaskRepository taskRepo;
    private final ArticleRepository articleRepo;

    public AgroService(UserRepository userRepo, CropRepository cropRepo, TaskRepository taskRepo, ArticleRepository articleRepo) {
        this.userRepo = userRepo;
        this.cropRepo = cropRepo;
        this.taskRepo = taskRepo;
        this.articleRepo = articleRepo;
    }

    public User startOnboarding(String profile) {
        return userRepo.save(new User(profile));
    }

    @Transactional
    public User registerUser(Long userId, String name) {
        User user = userRepo.findById(userId).orElseThrow();
        user.registerAccount(name);
        return userRepo.save(user);
    }

    @Transactional
    public Crop createCrop(Long userId, String cropName, double pumpRate) {
        User user = userRepo.findById(userId).orElseThrow();
        Crop crop = cropRepo.save(new Crop(cropName, user, pumpRate));
        
        taskRepo.save(new Task("🌱 Preparar Solo para o Plantio", "MISSAO", crop));
        return crop;
    }

    @Transactional
    public Task generateDailyWaterPrescription(Long cropId, double et0, double precipitation, boolean userConfirmedChuva) {
        Crop crop = cropRepo.findById(cropId).orElseThrow();
        
        double waterNeededMm = et0 * crop.getCurrentKc();
        
        if (userConfirmedChuva && precipitation > 0) {
            waterNeededMm = Math.max(0, waterNeededMm - precipitation);
        }

        if (waterNeededMm <= 0) {
            return taskRepo.save(new Task("🍹 Solo Protegido! Chova ou umidade ideal. Sem necessidade de rega hoje.", "REGA", crop));
        }

        double totalLitersNeeded = waterNeededMm * 10; 

        double hoursRequired = totalLitersNeeded / crop.getPumpRateLitersPerHour();
        long minutesRequired = Math.round(hoursRequired * 60);
        
        if (minutesRequired == 0) minutesRequired = 1;

        String description = String.format("💧 Confirmar Rega: %.1f Litros (Ligar bomba por %d Minutos)", totalLitersNeeded, minutesRequired);
        return taskRepo.save(new Task(description, "REGA", crop));
    }

    public List<Crop> getUserCrops(Long userId) {
        return cropRepo.findByUserId(userId);
    }

    @Transactional
    public void completeTask(Long taskId) {
        Task task = taskRepo.findById(taskId).orElseThrow();
        task.markAsCompleted();
        taskRepo.save(task);
    }

    public List<Task> getPendingTasks(Long cropId) {
        return taskRepo.findByCropIdAndIsCompletedFalse(cropId);
    }

    public List<Article> getArticlesByCategory(String category) {
        return articleRepo.findByCategoryContainingIgnoreCase(category);
    }
}
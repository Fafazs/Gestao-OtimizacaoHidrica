package com.agrocloud.api.controller;

import com.agrocloud.api.model.*;
import com.agrocloud.api.service.AgroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class AgroController {

    private final AgroService agroService;

    public AgroController(AgroService agroService) {
        this.agroService = agroService;
    }

    // TELA 1: Onboarding
    @PostMapping("/users/onboarding")
    public ResponseEntity<User> onboardUser(@RequestParam String profile) {
        return ResponseEntity.ok(agroService.startOnboarding(profile));
    }

    // TELA 5: Registrar Conta na Comunidade
    @PatchMapping("/users/{id}/register")
    public ResponseEntity<User> registerAccount(@PathVariable Long id, @RequestParam String name) {
        return ResponseEntity.ok(agroService.registerUser(id, name));
    }

    // TELA 2: Criar Horta (Botão +) passando a calibração da bomba (L/h)
    @PostMapping("/crops/user/{userId}")
    public ResponseEntity<Crop> newCrop(
            @PathVariable Long userId, 
            @RequestParam String name, 
            @RequestParam double pumpRate) {
        return ResponseEntity.ok(agroService.createCrop(userId, name, pumpRate));
    }

    // TELA 2: Listar Hortas do Produtor
    @GetMapping("/crops/user/{userId}")
    public ResponseEntity<List<Crop>> listCrops(@PathVariable Long userId) {
        return ResponseEntity.ok(agroService.getUserCrops(userId));
    }

    // TELA 2 (Madrugada/CRON) ou TELA 2 (Ao abrir o App): Aciona o Pluviômetro Social e Gera a Rega exata
    @PostMapping("/crops/{cropId}/calculate-irrigation")
    public ResponseEntity<Task> calculateIrrigation(
            @PathVariable Long cropId,
            @RequestParam double et0,
            @RequestParam double precipitation,
            @RequestParam boolean choveuNoLocal) { 
        
        Task waterTask = agroService.generateDailyWaterPrescription(cropId, et0, precipitation, choveuNoLocal);
        return ResponseEntity.ok(waterTask);
    }

    // TELA 3: Listar Tarefas e Missões pendentes do dia
    @GetMapping("/tasks/crop/{cropId}")
    public ResponseEntity<List<Task>> listTasks(@PathVariable Long cropId) {
        return ResponseEntity.ok(agroService.getPendingTasks(cropId));
    }

    // TELA 3: Botão Mão Suja (Concluir Rega ou Missão)
    @PatchMapping("/tasks/{taskId}/complete")
    public ResponseEntity<Void> finishTask(@PathVariable Long taskId) {
        agroService.completeTask(taskId);
        return ResponseEntity.ok().build();
    }

    // TELA 4: Biblioteca Agronômica com Categorias Simplificadas
    @GetMapping("/library")
    public ResponseEntity<List<Article>> getLibrary(@RequestParam String category) {
        return ResponseEntity.ok(agroService.getArticlesByCategory(category));
    }
}
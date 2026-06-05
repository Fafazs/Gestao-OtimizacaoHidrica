package com.agrocloud.api.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "crops")
public class Crop {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String stage; 
    private LocalDate plantingDate;
    
    private double currentKc; 
    private double pumpRateLitersPerHour; 

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    protected Crop() {}

    public Crop(String name, User user, double pumpRateLitersPerHour) {
        this.name = name;
        this.user = user;
        this.plantingDate = LocalDate.now();
        this.stage = "Semente";
        this.currentKc = 0.4; 
        this.pumpRateLitersPerHour = pumpRateLitersPerHour;
    }

    public void updateCultivation(String stage, double currentKc) {
        this.stage = stage;
        this.currentKc = currentKc;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getStage() { return stage; }
    public double getCurrentKc() { return currentKc; }
    public double getPumpRateLitersPerHour() { return pumpRateLitersPerHour; }
}
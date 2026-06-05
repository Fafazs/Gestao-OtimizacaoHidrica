package com.agrocloud.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String profileType;
    private boolean isRegistered;

    protected User() {}

    public User(String profileType) {
        this.profileType = profileType;
        this.isRegistered = false;
        this.name = "Produtor Anônimo";
    }

    public void registerAccount(String name) {
        this.name = name;
        this.isRegistered = true;
    }
    public Long getId() { return id; }
    public String getName() { return name; }
    public boolean isRegistered() { return isRegistered; }
}
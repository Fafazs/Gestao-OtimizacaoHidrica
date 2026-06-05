package com.agrocloud.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "articles")
public class Article {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String category;
    
    @Column(columnDefinition = "TEXT")
    private String content;

    protected Article() {}

    public Article(String title, String category, String content) {
        this.title = title;
        this.category = category;
        this.content = content;
    }
    public String getTitle() { return title; }
}
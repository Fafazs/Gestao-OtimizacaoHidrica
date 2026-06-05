package com.agrocloud.api.repository;
import com.agrocloud.api.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findByCategoryContainingIgnoreCase(String category);
}
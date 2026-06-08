package com.agrocloud.api.config;

import com.agrocloud.api.model.*;
import com.agrocloud.api.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import java.util.List;

@Configuration
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepo;
    private final FieldRepository fieldRepo;
    private final TaskRepository taskRepo;
    private final ArticleRepository articleRepo;

    public DataSeeder(UserRepository userRepo, FieldRepository fieldRepo, TaskRepository taskRepo, ArticleRepository articleRepo) {
        this.userRepo = userRepo;
        this.fieldRepo = fieldRepo;
        this.taskRepo = taskRepo;
        this.articleRepo = articleRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepo.count() > 0) return;

        articleRepo.save(new Article(
            "Alface Crespa",
            "https://agrocloud.com/images/alface.jpg",
            "A alface crespa é de rápido cultivo e excelente para sistemas hidropônicos ou canteiros suspensos.",
            List.of("Rúcula", "Cebolinha"),
            "18°C a 24°C", "70%", "Bem drenado, aerado e rico em nitrogênio"
        ));

        articleRepo.save(new Article(
            "Tomate Cereja",
            "https://agrocloud.com/images/tomate.jpg",
            "O tomate cereja é de fácil cultivo em vasos e jardineiras, produzindo frutos adocicados.",
            List.of("Manjericão", "Calêndula"),
            "21°C a 26°C", "60% a 70%", "Rico em matéria orgânica, bem drenado e levemente ácido"
        ));

        User fabricio = new User("Fabricio", "fabricio@email.com", "senha_segura_123");
        userRepo.save(fabricio);

        Field f1 = fieldRepo.save(new Field("Horta da Varanda", "Tomate", fabricio));
        Field f2 = fieldRepo.save(new Field("Vaso Suspenso", "Coentro", fabricio));

        taskRepo.save(new Task("Irrigação da Tarde", "Balanço hídrico prescrito pelo motor", 1, 15, f1));
        taskRepo.save(new Task("Adubação Orgânica", "Adicionar composto de húmus nas bordas do vaso", 2, 0, f1));
        taskRepo.save(new Task("Check de Pragas", "Olhar o verso das folhas em busca de pulgões", 3, 0, f2));

        System.out.println("API RODANDO...");
    }
}
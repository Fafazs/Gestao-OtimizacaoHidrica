package com.agrocloud.api.config;

import com.agrocloud.api.model.*;
import com.agrocloud.api.repository.*;
import com.agrocloud.api.service.AgroService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepo;
    private final CropRepository cropRepo;
    private final ArticleRepository articleRepo;
    private final AgroService agroService;

    public DataSeeder(UserRepository u, CropRepository c, ArticleRepository a, AgroService agroService) {
        this.userRepo = u; this.cropRepo = c; this.articleRepo = a; this.agroService = agroService;
    }

    @Override
    public void run(String... args) throws Exception {
        User seuJoao = new User("AGRICULTOR");
        seuJoao.registerAccount("Seu João");
        userRepo.save(seuJoao);

        Crop tomate = new Crop("Tomate Cereja - Canteiro 01", seuJoao, 1200.0);
        tomate.updateCultivation("Floração", 1.15); 
        cropRepo.save(tomate);

        agroService.generateDailyWaterPrescription(tomate.getId(), 5.0, 2.0, false);
                
        articleRepo.save(new Article(
            "Manejo do Pulgão no Tomateiro", 
            "Pragas", 
            "* O que fazer: Aplique óleo de neem diluído a 1% nas folhas ao fim da tarde.\n* O que evitar: Não jogue água diretamente sobre as folhas afetadas nas horas de sol forte."
        ));
        
        articleRepo.save(new Article(
            "Guia de Espaçamento Hídrico do Tomate", 
            "Hortaliças", 
            "* Espaçamento ideal: 50cm entre plantas e 1m entre linhas.\n* Dica de Sede: O tomate precisa de solo úmido, mas nunca encharcado na fase de Floração."
        ));

        System.out.println("✅ BACKEND AGROCLOUD TOTALMENTE ATUALIZADO CONFORME O DRS!");
    }
}
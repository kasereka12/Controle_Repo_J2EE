package org.example.service2.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
public class Customer {
    @Id
    private  String id;
    private String nom;

    private  String prenom;
    private String adress;

    private  String telephone;
}

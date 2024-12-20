package org.example.inventoryservice.repositorie;

import org.example.inventoryservice.entitie.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;



@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product , String> {
}

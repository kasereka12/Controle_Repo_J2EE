package org.example.service2.entities;


import org.springframework.data.rest.core.config.Projection;

@Projection(name = "fullCustomer" , types = Customer.class)
public interface CustomerProjection {
    public  String getId();
    public String getNom();


}

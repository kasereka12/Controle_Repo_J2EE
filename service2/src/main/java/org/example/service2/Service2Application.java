package org.example.service2;

import org.example.service2.entities.Customer;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.example.service2.repositorie.CustomerRepository;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.UUID;

@SpringBootApplication
public class Service2Application {

	public static void main(String[] args) {
		SpringApplication.run(Service2Application.class, args);
	}
	@Bean
	CommandLineRunner start(CustomerRepository clientRepository, RepositoryRestConfiguration repositoryRestConfiguration){
		return (args -> {
			repositoryRestConfiguration.exposeIdsFor(Customer.class);
			for (int i=0 ; i<10; i++){
				Customer c = Customer
						.builder()
						.id(UUID.randomUUID().toString())
						.nom("daniel")
						.prenom("MUTAKA")
						.adress("D 28 Av Nzilo cite CPA")
						.telephone("0761841419")
						.build();
				clientRepository.save(c);
			}
			clientRepository.findAll().forEach(c ->{
				System.out.println(c);
			});
		});
	}
}

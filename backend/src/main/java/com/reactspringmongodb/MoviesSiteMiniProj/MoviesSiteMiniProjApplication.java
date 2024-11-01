package com.reactspringmongodb.MoviesSiteMiniProj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesSiteMiniProjApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesSiteMiniProjApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot(){
		return "Hello Pratyush, welcome in this ReactJS, Spring Boot, MongoDB mini project of freecodecamp.";
	}

}

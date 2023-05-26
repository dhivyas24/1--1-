package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WorkExperience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String company;

    @Column(nullable = false)
    private String position;

	public Long getId() {
		return id;
	}

	public String getCompany() {
		return company;
	}

	public String getPosition() {
		return position;
	}

    // Other work experience fields and their respective getters/setters

    // Constructors

    // Getters and Setters
}

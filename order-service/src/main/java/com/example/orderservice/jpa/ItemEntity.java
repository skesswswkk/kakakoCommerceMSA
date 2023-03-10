package com.example.orderservice.jpa;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public abstract class ItemEntity {

    private Long id;
    private String name;
    private int price;
    private int stockQuantity;
}


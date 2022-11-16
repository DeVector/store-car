package com.store.car.repositories;

import com.store.car.entities.Marca;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarcarRepository extends CrudRepository<Marca, Long> {


    @Query("SELECT m FROM Marca m WHERE m.name LIKE %:name%")
    Marca findByName(String name);

}

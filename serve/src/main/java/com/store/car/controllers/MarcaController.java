package com.store.car.controllers;

import com.store.car.entities.dto.MarcaDTO;
import com.store.car.services.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/marca")

public class MarcaController {

    @Autowired
    private MarcaService service;

    @GetMapping
    public ResponseEntity<List<MarcaDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping
    public ResponseEntity<MarcaDTO> create(@RequestBody MarcaDTO marca) {
        return ResponseEntity.ok(service.create(marca));
    }

    @GetMapping(value = "/name/{name}")
    public ResponseEntity<MarcaDTO> findByName(@PathVariable String name){
        return ResponseEntity.ok(service.findByName(name));
    }

    @DeleteMapping(value = "/{name}")
    public ResponseEntity<MarcaDTO> deleteByName(@PathVariable String name){
        return ResponseEntity.ok(service.deleteByName(name));
    }

    @PutMapping
    public ResponseEntity<MarcaDTO> updateByName(@RequestBody MarcaDTO dto){
        return ResponseEntity.ok(service.updateByName(dto));
    }
}

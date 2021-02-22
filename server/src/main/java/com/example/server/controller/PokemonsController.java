package com.example.server.controller;

import com.example.server.model.Pokemons;
import com.example.server.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokemon")

public class PokemonsController {
    @Autowired
    PokemonService pokemonService;
    @GetMapping
    Iterable<Pokemons> getPokemons(){return pokemonService.getPokemons();}
}

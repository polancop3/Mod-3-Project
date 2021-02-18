package com.example.server.service;

import com.example.server.model.Pokemons;

public interface PokemonService {
    Iterable<Pokemons> getPokemons();
}

import React, { useEffect, useState } from 'react';
import Searchbar from './component/Searchbar';
import Pokemon from './component/Pokemon';
import { getPokemon, getPokemonDetails } from './api/Api';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonResults = await getPokemon();
      const detailedPokemon = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          return await getPokemonDetails(pokemon.url);
        })
      );
      setPokemonList(detailedPokemon);
      setFilteredPokemon(detailedPokemon);
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [searchQuery, pokemonList]);

  return (
    <div className="App">
      <Searchbar onSearch={setSearchQuery} />
      <div className="flex flex-wrap items-center justify-evenly">
        {filteredPokemon.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;

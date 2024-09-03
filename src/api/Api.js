// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  console.log(response.data.results)
  return response.data.results;
};

export const getPokemonDetails = async (url) => {
  const response = await axios.get(url);
  console.log(response .data)
  return response.data;
};

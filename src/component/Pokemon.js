import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="m-4 w-[15rem] border-black border-2 rounded-lg capitalize">
        <img
          className="mx-auto"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />{" "}
      <h3 className="text-center text-2xl">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;

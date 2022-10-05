import React from "react";
import "./PokemonCard.css";
import "../GenericCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="PokemonCard" key={pokemon.id}>
      <div className="PokemonAvatarWrapper">
        <h2 className="PokemonName">{pokemon.name}</h2>
        <img
          className="PokemonAvatar"
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default ??
            pokemon.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
          alt={pokemon.name}
        />
      </div>
      <div className="PokemonDetails">
        <span>
          <strong>height</strong>: {pokemon.height * 10} cm
        </span>
        <span>
          <strong>weight</strong>: {pokemon.weight / 10} kg
        </span>
        <span>
          <strong>type</strong>: {pokemon.types[0].type.name}
        </span>
        <span>
          <strong>id</strong>: {pokemon.id}
        </span>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {};
PokemonCard.defaultProps = {};

export default PokemonCard;

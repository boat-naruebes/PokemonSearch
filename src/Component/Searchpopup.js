import React from "react";
import Ability from "./Ability";
import Type from "./Type";

const Searchpopup = (props) => {
  return (
    <div className="searchimage">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.apilink.id}.png`}
        alt=""
      />
      <h2>{props.apilink.name}</h2>
      <div className="searchdata">
        <h3>ID:</h3>
        <h3>{props.apilink.id}</h3>
        <h3>Weight:</h3>
        <h3>{props.apilink.weight}</h3>
        <h3>Height:</h3>
        <h3>{props.apilink.height}</h3>
        <h3>Ability:</h3>
        <h3>
          <Ability apilink={props.apilink} />
        </h3>
        <h3>Type:</h3>
        <h3>
          <Type apilink={props.apilink} />
        </h3>
      </div>
    </div>
  );
};
export default Searchpopup;

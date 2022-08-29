import React from "react";
const Ability = (props) => {
  const abilitydata = [];
  for (let i in props.apilink.abilities) {
    abilitydata.push(props.apilink.abilities[i].ability.name);
  }
  return abilitydata.map((abilityitem) => (
    <div key={abilityitem}>- {abilityitem}</div>
  ));
};

export default Ability;

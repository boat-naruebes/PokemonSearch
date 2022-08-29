import React from "react";
const Type = (props) => {
  const typedata = [];
  for (let i in props.apilink.types) {
    typedata.push(props.apilink.types[i].type.name);
  }
  return typedata.map((abilityitem) => (
    <div key={abilityitem}>- {abilityitem}</div>
  ));
};
export default Type;

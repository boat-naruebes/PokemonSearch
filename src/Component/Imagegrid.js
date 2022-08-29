import React from "react";
import Popup from "reactjs-popup";
import Ability from "./Ability";
import Type from "./Type";

const Imagegrid = (props) => {
  return (
    <div className="grid-container">
      {props.numbox.map((num) => {
        return (
          <div key={num}>
            <Popup
              onOpen={() => {
                props.getdata(num);
                const data = document.getElementById("data");
                data.classList.add("custompopup");
              }}
              trigger={
                <img
                  className="fetch-image"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`}
                  alt={num}
                />
              }
              modal
            >
              {(close) => (
                <>
                  <div className="popup" id="data">
                    <div className="left">
                      <img
                        className="img"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`}
                        alt={props.apilink.name}
                      />
                      <h2>{props.apilink.name}</h2>
                    </div>
                    <div className="right">
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
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                  </div>
                </>
              )}
            </Popup>
          </div>
        );
      })}
    </div>
  );
};

export default Imagegrid;

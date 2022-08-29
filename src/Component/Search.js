import React from "react";

function Search(props) {
  const onchange = (event) => {
    props.updatetextinput(event.target.value.toLowerCase());
    props.getdata("");
    props.updatecheck("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const Checkloadding =
      props.data == "" && props.textinput != "" ? props.setLoading(true) : "";
    const delay = setTimeout(() => {
      props.getdata(props.textinput);
    }, 500);
  };
  return (
    <div>
      <div className="bander">
        <h1>Pokemon-Search</h1>
        <form onSubmit={onSubmit}>
          <input
            className="input-name"
            type="textinput"
            placeholder="Pokemon-Name or ID"
            onChange={onchange}
          />
          <button className="searchinput">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Search;

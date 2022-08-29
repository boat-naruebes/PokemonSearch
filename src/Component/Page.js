import React from "react";
import { useState } from "react";

const Page = (props) => {
  const [fistvalue, updatevalue] = useState(1);
  const Changepage = (checknum) => {
    console.log(checknum);

    if (props.numbox[23] / 24 + 1 <= 427 && checknum == "right") {
      updatevalue(props.numbox[23] / 24 + 1);
      props.updatebox((pagebox) => pagebox.map((numbox) => (numbox += 24)));
    } else if (props.numbox[23] / 24 - 1 >= 1 && checknum == "left") {
      updatevalue(props.numbox[23] / 24 - 1);
      props.updatebox((pagebox) => pagebox.map((numbox) => (numbox -= 24)));
    }
  };

  const Enterkey = (event) => {
    const checkkey =
      event.code == "Enter" && fistvalue <= 427 && fistvalue >= 1
        ? Summit(event)
        : "";
  };

  const Changevalue = (event) => {
    const Newvalue = parseInt(event.target.value);
    const checkscope =
      Newvalue <= 427 && Newvalue > 0 ? updatevalue(Newvalue) : updatevalue("");
  };

  const Summit = (event) => {
    if (fistvalue != "") {
      event.preventDefault();
      props.updatebox((pagebox) =>
        pagebox.map((numbox) => numbox + 24 * fistvalue - props.numbox[23])
      );
    }
  };
  return (
    <div className="page">
      <i class="fa-solid fa-angles-left" onClick={() => Changepage("left")}></i>
      <input
        value={fistvalue}
        type="number"
        placeholder="1 - 427"
        onChange={Changevalue}
        onKeyPress={Enterkey}
      />

      <form onSubmit={Summit}>
        <button onSubmit={Summit} className="searchpage">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <i
        class="fa-solid fa-angles-right"
        onClick={() => Changepage("right")}
      ></i>
    </div>
  );
};
export default Page;

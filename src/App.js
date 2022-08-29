import "./App.css";
import image from "./img/nodota.png";
import loadding from "./img/loadding.png";
import { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import Page from "./Component/Page";
import Searchpopup from "./Component/Searchpopup";
import Imagegrid from "./Component/Imagegrid";
import MoonLoader from "react-spinners/MoonLoader";
import Search from "./Component/Search";

const override: CSSProperties = {
  margin: " auto",
  marginTop: "70px",
  backgroundImage: "url(" + loadding + ")",
  backgroundSize: "cover",
};
function App() {
  const [apilink, updatelink] = useState([]);
  const [data, getdata] = useState("");
  const [check, updatecheck] = useState("");
  const [textinput, updatetextinput] = useState("");
  let [loading, setLoading] = useState(true);
  const [numbox, updatebox] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]);

  useEffect(() => {
    {
      axios(`https://pokeapi.co/api/v2/pokemon/${data}`)
        .then((Response) => {
          updatelink(Response.data);
          setLoading(false);
          updatecheck("display");
        })
        .catch(() => {
          updatecheck("nodata");
          setLoading(false);
        });
    }
  }, [data]);

  return (
    <div className="container">
      <Search
        data={data}
        getdata={getdata}
        updatecheck={updatecheck}
        textinput={textinput}
        updatetextinput={updatetextinput}
        setLoading={setLoading}
      />
      {textinput == "" ? (
        [
          <Imagegrid numbox={numbox} apilink={apilink} getdata={getdata} />,
          <Page numbox={numbox} updatebox={updatebox} />,
        ]
      ) : (
        <MoonLoader loading={loading} cssOverride={override} size={80} />
      )}

      {loading ? [<h1 className="loading-txt">loadding...</h1>] : ""}

      {check == "display" && textinput != "" && data != ""
        ? [<Searchpopup numbox={numbox} apilink={apilink} />]
        : check == "nodata"
        ? [
            <img className="img-no-data" src={image} />,
            <h1 class="txt-no-data">NO-DATA</h1>,
          ]
        : ""}
    </div>
  );
}
export default App;

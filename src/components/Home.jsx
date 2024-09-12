import { Card } from "./PokemonCard";
import { useContext, useState } from "react";
import "./Home.css";
import { ContextComp } from "./Context";

export const Home = () => {
  let [inputVal, setInputVal] = useState("");
//   getting Data from Context API
  let [...value] = useContext(ContextComp);

  if (value) {
    // filtering data based Search result
    let searchData = value.filter((cur) =>
      cur.name.toLowerCase().includes(inputVal)
    );
    return (
      <div className="container">
        <div className="main">
          <h1>Let's Catch Pokemon</h1>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <div>
            <ul>
              {searchData.map((curElem, index) => {
                return (
                  <Card keys={index} Data={curElem.url} name={curElem.name} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

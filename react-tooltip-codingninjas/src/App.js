import React from "react";
import "./styles.css";

import ReactTooltip from "react-tooltip";

export default function App(props) {
  return (
    <div className="App">
      <button data-tip data-for="tool-tip">
        Hover over me
      </button>

      <ReactTooltip id="tool-tip" place={props.value} effect="solid">
        Thanks for hovering! I'm a tooltip
      </ReactTooltip>
    </div>
  );
}

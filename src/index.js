import React from "react";
import ReactDOM from "react-dom";

const link = React.createElement(
  "a",
  {
    href: "https://reactjs.org/",
    target: "_blank",
    rel: "noreferrer noopener",
  },
  "Посилання"
);

ReactDOM.render(link, document.getElementById("root"));

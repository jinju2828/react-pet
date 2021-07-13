import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "example-id" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Boca",
      animal: "Doll",
      breed: "Avocado",
    }),
    React.createElement(Pet, {
      name: "Sadari",
      animal: "Doll",
      breed: "Lion",
    }),
    React.createElement(Pet, {
      name: "Muji",
      animal: "Doll",
      breed: "Radish",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));

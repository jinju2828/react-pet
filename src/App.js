const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));

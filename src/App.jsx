import { Component } from "react";
import Beers from "./components/Beers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1>Beer API</h1>
        <Beers />;
      </>
    );
  }
}

export default App;

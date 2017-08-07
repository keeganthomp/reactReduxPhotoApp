import React, { Component } from "react";
import "../styles/App.css";
import PhotoBar from "../components/PhotoBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoBar />
      </div>
    );
  }
}

export default App;

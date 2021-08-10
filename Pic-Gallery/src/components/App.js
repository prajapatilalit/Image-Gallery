import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  onFormSubmit(text) {
    console.log(text);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;

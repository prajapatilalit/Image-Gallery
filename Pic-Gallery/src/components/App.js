import React, { Component } from "react";
import UnplashApi from "../api/UnplashApi";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    images: [],
  };

  onFormSubmit = async (text) => {
    const response = await UnplashApi.get("/search/photos", {
      params: { query: text },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

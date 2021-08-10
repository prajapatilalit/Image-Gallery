import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    images: [],
  };

  onFormSubmit = async (text) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: text },
      headers: {
        Authorization: "Client-ID dvNGhJ2CNPL4XjWgTpVQYag0FCidzbO5bZSs6Pe0_Z4",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;

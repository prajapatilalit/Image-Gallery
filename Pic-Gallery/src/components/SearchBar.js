import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    text: "",
  };

  onInputSubmit(event) {
    event.preventDefault();
    console.log(this.state.text);
  }

  render() {
    return (
      <form onSubmit={(event) => this.onInputSubmit(event)} className="ui form">
        <div className="ui field">
          <label>Search Image</label>
          <input
            type="text"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;

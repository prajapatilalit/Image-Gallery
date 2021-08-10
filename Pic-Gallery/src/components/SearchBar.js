import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    text: "",
  };

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              onChange={(e) => this.setState({ text: e.target.value })}
              value={this.state.text}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import SearchPannel from "./SearchPannel";
import RsvpdEvents from "./RsvpdEvents";

//dynamic api url
import API_URL from "./config";

class App extends Component {
  state = {
    searchResults: [],
    rsvpdEvents: []
  };

  searchForArtist = e => {
    let query = e.target[0].value;
    let url = `${API_URL}/artists/search?artist_name=${query}`

    fetch(url)
      .then(r => r.json())
      .then(r => this.setState({searchResults: [r]}))

  };

  render() {
    return (
      <div className="App">
        <SearchPannel searchForArtist={this.searchForArtist} searchResults={this.state.searchResults} />
        <RsvpdEvents />
      </div>
    );
  }
}

export default App;

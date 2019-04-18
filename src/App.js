import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import SearchPannel from "./SearchPannel";
import RsvpdEvents from "./RsvpdEvents";
import Events from "./Events";

//dynamic api url
import API_URL from "./config";

class App extends Component {
  state = {
    searchResults: [],
    rsvpdEvents: [],
    selectedArtist: {},
    selectedArtistEvents: []
  };

  selectArtist = artist => {
    this.setState({ selectedArtist: artist });
    this.getUpcomingArtistEvents(artist.name)
  };

  getUpcomingArtistEvents = artistName => {

    let url = `${API_URL}/events/search?artist_name=${artistName}`;
    fetch(url)
      .then(r => r.json())
      .then( r => this.setState({selectedArtistEvents: r}))
  };

  searchForArtist = e => {
    let query = e.target[0].value;
    let url = `${API_URL}/artists/search?artist_name=${query}`;

    fetch(url)
      .then(r => r.json())
      .then(r => this.setState({ searchResults: [r] }));
  };

  render() {

    return (
      <div className="App">
        <SearchPannel
          selectArtist={this.selectArtist}
          searchForArtist={this.searchForArtist}
          searchResults={this.state.searchResults}
        />
        <RsvpdEvents />
        <Events selectedArtistEvents={this.state.selectedArtistEvents} selectedArtist={this.state.selectedArtist} />
      </div>
    );
  }
}

export default App;

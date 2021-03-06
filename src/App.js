import React, { Component, Fragment } from "react";
import "./App.css";

//components
import SearchPannel from "./SearchPannel";
import RsvpdEvents from "./RsvpdEvents";
import Events from "./Events";
import SearchBarPannel from "./SearchBarPannel"
import WelcomePage from "./WelcomePage"



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
    this.getUpcomingArtistEvents(artist.name);
  };

  rsvpToEvent = event => {
    this.setState({ rsvpdEvents: [...this.state.rsvpdEvents, event] });
  };

  unRsvp = event => {
    let oldRsvpdEvents = [...this.state.rsvpdEvents];
    let result = oldRsvpdEvents.filter(e => e.id !== event.id);
    this.setState(
      {
        rsvpdEvents: result,
        selectedArtistEvents: []
      },
      this.getUpcomingArtistEvents(this.state.selectedArtist.name)
    );
  };

  isEventRsvpd = event => {
    for (let e of [...this.state.rsvpdEvents]) {
      if (e.id === event.id) {
        return true;
      }
    }
    return false;
  };

  getUpcomingArtistEvents = artistName => {
    let url = `${API_URL}/events/search?artist_name=${artistName}`;
    fetch(url)
      .then(r => r.json())
      .catch(error => console.error("Error:", error))
      .then(r => this.setState({ selectedArtistEvents: r }));
  };

  searchForArtist = e => {
    let query = e.target.value;
    let url = `${API_URL}/artists/search?artist_name=${query}`;

    fetch(url)
      .then(r => r.json())
      .then(r =>
        this.setState(
          {
            searchResults: [r],
            selectedArtist: r
          },
          this.getUpcomingArtistEvents(r.name)
        )
      );
  };

  render() {
    return (
      <div className="App">

        <SearchBarPannel searchForArtist={this.searchForArtist}/>

        {this.state.rsvpdEvents.length === 0 &&
        this.state.searchResults.length < 1 ? (
          <WelcomePage />
        ) : (
          <Fragment>
            <SearchPannel
              selectArtist={this.selectArtist}
              searchForArtist={this.searchForArtist}
              searchResults={this.state.searchResults}
            />
            <RsvpdEvents
              unRsvp={this.unRsvp}
              rsvpdEvents={this.state.rsvpdEvents}
            />
            <Events
              rsvpdEvents={this.state.rsvpdEvents}
              isEventRsvpd={this.isEventRsvpd}
              rsvpToEvent={this.rsvpToEvent}
              selectedArtistEvents={this.state.selectedArtistEvents}
              selectedArtist={this.state.selectedArtist}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;

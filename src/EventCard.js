import React, { Fragment, Component } from "react";

// components
import MapComponent from "./MapComponent";

const uuidv1 = require("uuid/v1");

export default class EventCard extends Component {
  constructor(props) {
    super();

    let eventDate = new Date(props.event.datetime);
    this.state = {
      rsvpd: this.isRsvpd(props.event, props.rsvpdEvents),
      day: eventDate.getDate(),
      month: eventDate.getMonth(),
      year: eventDate.getFullYear(),
      hours: eventDate.getHours(),
      minutes: eventDate.getMinutes()
    };
  }

  isRsvpd = (event, rsvpdEvents) => {
    for (let e of rsvpdEvents){
      if (e.id === event.id) {
        return true
      }
    }
    return false

  };

  rsvpHandeler = () => {
    this.props.rsvpToEvent(this.props.event);
    this.setState({ rsvpd: true });
  };

  eventDateTime = () => new Date(this.props.event.datetime);

  render() {
    return (
      <div className="event-card">
        <p>{this.props.event.venue.city}</p>
        <p>{this.props.event.venue.country}</p>

        {this.props.event.venue.latitude ? (
          <MapComponent
            latitude={this.props.event.venue.latitude}
            longitude={this.props.event.venue.longitude}
          />
        ) : null}

        <p>{this.props.event.venue.name}</p>
        <p>{this.props.event.venue.region}</p>
        <p>
          {this.state.day}/{this.state.month}/{this.state.year}
        </p>
        <p>
          {this.state.hours}:
          {this.state.minutes == 0 ? "00" : this.state.minutes}
        </p>

        <p>{this.props.event.description}</p>

        {this.props.event.offers.map(ofr => (
          <Fragment key={uuidv1()}>
            <a href={ofr.url}>{ofr.type}</a>
            <p>{ofr.status}</p>
          </Fragment>
        ))}
        <a href={this.props.event.url}> Check it out</a>

        <button disabled={this.state.rsvpd} onClick={this.rsvpHandeler}>
          RSVP
        </button>

        <hr />
      </div>
    );
  }
}

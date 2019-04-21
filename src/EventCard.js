import React, { Fragment, Component } from "react";

// components
import MapComponent from "./MapComponent";

const uuidv1 = require("uuid/v1");
const moment = require("moment");

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
    for (let e of rsvpdEvents) {
      if (e.id === event.id) {
        return true;
      }
    }
    return false;
  };

  rsvpHandeler = () => {
    this.props.rsvpToEvent(this.props.event);
    this.setState({ rsvpd: true });
  };

  eventDateTime = () => new Date(this.props.event.datetime);

  render() {

    return (
      <div className="event-card">
        <p className="event-date">
          {moment(this.props.event.datetime).format("LL")}
        </p>
        <h4>
          {this.props.event.venue.city}, {this.props.event.venue.country}
        </h4>

        <h5>{moment(this.props.event.datetime).format("LT")}</h5>
        <p>{this.props.event.venue.region}</p>

        {/* <p>
          {this.state.hours}:
          {this.state.minutes == 0 ? "00" : this.state.minutes}
        </p> */}

        <p>{this.props.event.description}</p>

        <div className="event-links">
          {this.props.event.offers.map(ofr => (
            <Fragment key={uuidv1()}>
              <a href={ofr.url}>{ofr.type}</a>
              {/* <p>{ofr.status}</p> */}
            </Fragment>
          ))}
          <a href={this.props.event.url}>More Info</a>
        </div>
        <button disabled={this.state.rsvpd} onClick={this.rsvpHandeler}>
          RSVP
        </button>
      </div>
    );
  }
}

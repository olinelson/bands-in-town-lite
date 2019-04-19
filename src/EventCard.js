import React, { Fragment, Component } from "react";

// components
import MapComponent from "./MapComponent";

const uuidv1 = require("uuid/v1");

export default class EventCard extends Component {

  constructor (props){
    super()
    this.state = {
      rsvpd: false
    }
  }


  // rsvpHandeler = () => {
  //   this.props.rsvpToEvent(this.props.event);
  // };

  eventDateTime = () => new Date(this.props.event.datetime)

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
          {this.eventDateTime.getDay()}/{this.eventDateTime.getMonth()}/
          {this.eventDateTime.getFullYear()}
        </p>
        <p>
          {this.eventDateTime.getHours() <= 12
            ? this.eventDateTime.getHours()
            : this.eventDateTime.getHours() - 12}
          :
          {this.eventDateTime.getMinutes() === 0 ? "00" : this.eventDateTime.getMinutes()}
        </p>

        <p>{this.props.event.description}</p>

        {this.props.event.offers.map(ofr => (
          <Fragment key={uuidv1()}>
            <a href={ofr.url}>{ofr.type}</a>
            <p>{ofr.status}</p>
          </Fragment>
        ))}
        <a href={this.props.event.url}> Check it out</a>

        <button disabled={this.state.rsvpd} onClick={this.rsvpHandeler}>RSVP</button>

        <hr />
      </div>
    );
  }
}

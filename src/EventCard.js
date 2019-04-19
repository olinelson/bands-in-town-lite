import React, { Fragment } from "react";

// components
import MapComponent from "./MapComponent";

const uuidv1 = require("uuid/v1");

export default function EventCard(props) {

  const rsvpHandeler = () => {
    props.rsvpToEvent(props.event);

  };

  return (
    <div className="event-card">
      <p>{props.event.venue.city}</p>
      <p>{props.event.venue.country}</p>

      <MapComponent
        latitude={props.event.venue.latitude}
        longitude={props.event.venue.longitude}
      />
      <p>{props.event.venue.name}</p>
      <p>{props.event.venue.region}</p>
      <p>{props.event.datetime}</p>
      <p>{props.event.description}</p>


      {props.event.offers.map(ofr => (
        <Fragment key={uuidv1()}>
          <a href={ofr.url}>{ofr.type}</a>
          <p>{ofr.status}</p>
        </Fragment>
      ))}
      <a href={props.event.url}> Check it out</a>

      <button onClick={rsvpHandeler}>RSVP</button>

      <hr />
    </div>
  );
}

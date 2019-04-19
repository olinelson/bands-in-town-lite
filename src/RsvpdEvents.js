import React from "react";

const uuidv1 = require("uuid/v1");

export default function RsvpdEvents(props) {
  return (
    <div className="rsvpd-events">
      <h4>Rsvpd Events</h4>
      {props.rsvpdEvents.map(e => (
        <p key={uuidv1()}>{e.venue.name}</p>
      ))}
    </div>
  );
}

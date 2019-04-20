import React from "react";

// components
import RsvpCard from "./RsvpCard";

const uuidv1 = require("uuid/v1");

export default function RsvpdEvents(props) {

  return (
    <div className="rsvpd-events-pannel">
      <h4>Rsvpd Events</h4>
      <div className="rsvpd-events">
      {props.rsvpdEvents
        .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
        .map(e => (
          <RsvpCard unRsvp={props.unRsvp} key={uuidv1()} event={e} />
        ))}
      {/* {props.rsvpdEvents.map(e => (
        <RsvpCard unRsvp={props.unRsvp} key={uuidv1()} event={e} />
      ))} */}
      </div>
    </div>
  );
}

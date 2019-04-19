import React from "react";

// components
import RsvpCard from "./RsvpCard";

const uuidv1 = require("uuid/v1");

export default function RsvpdEvents(props) {
  console.log("in rsvpd events", props.rsvpdEvents);
  return (
    <div className="rsvpd-events">
      <h4>Rsvpd Events</h4>
      {props.rsvpdEvents
        .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
        .map(e => (
          <RsvpCard unRsvp={props.unRsvp} key={uuidv1()} event={e} />
        ))}
      {/* {props.rsvpdEvents.map(e => (
        <RsvpCard unRsvp={props.unRsvp} key={uuidv1()} event={e} />
      ))} */}
    </div>
  );
}

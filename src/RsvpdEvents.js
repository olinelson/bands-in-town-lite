import React from "react";

// components
import RsvpCard from "./RsvpCard"

const uuidv1 = require("uuid/v1");

export default function RsvpdEvents(props) {
    console.log("in rsvpd events", props.rsvpdEvents)
  return (
    <div className="rsvpd-events">
      <h4>Rsvpd Events</h4>
      {props.rsvpdEvents.map(e => (
          <RsvpCard key={uuidv1()} event={e}/>
      ))}
    </div>
  );
}

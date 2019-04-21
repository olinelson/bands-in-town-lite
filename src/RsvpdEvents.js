import React from "react";

// components
import RsvpCard from "./RsvpCard";

const uuidv1 = require("uuid/v1");

export default function RsvpdEvents(props) {
  const mapEvents = () => {
    return props.rsvpdEvents
      .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
      .map(e => <RsvpCard unRsvp={props.unRsvp} key={uuidv1()} event={e} />);
  };

  return (
    <div className="rsvpd-events-pannel">
      <div className="rsvpd-events">
        <h4>RSVP'd</h4>
        {props.rsvpdEvents.length > 0 ? (
          mapEvents()
        ) : (
          <small>Your RSVP'd events will show up here</small>
        )}
      </div>
    </div>
  );
}

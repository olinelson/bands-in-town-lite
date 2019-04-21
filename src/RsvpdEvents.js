import React from "react";

// components
import RsvpCard from "./RsvpCard";

const uuidv1 = require("uuid/v1");

export default function RsvpdEvents(props) {
  const mapEvents = () => {
    return(
      props.rsvpdEvents
            .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
            .map(e => <RsvpCard unRsvp={props.unRsvp} key={uuidv1()} event={e} />)
        )
    };

  return (
    <div className="rsvpd-events-pannel">
      <h4>Rsvpd</h4>
      <div className="rsvpd-events">
        {props.rsvpdEvents.length > 0 ? mapEvents() : 
        <small>You are going to any gigs yet!</small>
        }
      </div>
    </div>
  );
}

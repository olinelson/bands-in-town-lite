import React, { Fragment } from "react";

const uuidv1 = require("uuid/v1");

export default function RsvpCard(props) {
  
  const cancelHandler = () => {
    props.unRsvp(props.event)

  }


  return (
    <div className="rsvp-card">
      <p>{props.event.venue.name}</p>

      <p>{props.event.datetime}</p>

      {props.event.offers.map(ofr => (
        <Fragment key={uuidv1()}>
          <a href={ofr.url}>{ofr.type}</a>
          <p>{ofr.status}</p>
        </Fragment>
      ))}
      <a href={props.event.url}> Check it out</a>

      <button onClick={cancelHandler}>cancel</button>
    </div>
  );
}

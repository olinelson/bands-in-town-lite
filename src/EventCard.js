import React, { Fragment } from "react";

export default function EventCard(props) {
  return (
    <div>
      <p>{props.event.datetime}</p>
      <p>{props.event.description}</p>
      <p>{props.event.description}</p>
      <hr />
      {props.event.offers.map(ofr => (
        <Fragment>
          <p>{ofr.type}</p>
          <p>{ofr.type}</p>
          <a href={ofr.url}>LINK</a>
          <p>{ofr.status}</p>
          <hr />
        </Fragment>
      ))}
      <a href={props.event.url}> Check it out</a>
      <hr />
      <p>Venue:</p>
          <p>{props.event.venue.city}</p>
          <p>{props.event.venue.country}</p>
          <p>{props.event.venue.latitude}</p>
          <p>{props.event.venue.longitude}</p>
          <p>{props.event.venue.name}</p>
          <p>{props.event.venue.region}</p>


    </div>
  );
}

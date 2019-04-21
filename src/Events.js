import React from "react";

// components
import EventCard from "./EventCard";

export default function Events(props) {
  return (
    <div className="events-pannel">
      <div className="search-bar" />
      {/* <h4>Events for {props.selectedArtist.name}</h4> */}
      <div className="events">
        {props.selectedArtistEvents.map(e => (
          <EventCard
            rsvpdEvents={props.rsvpdEvents}
            isEventRsvpd={props.isEventRsvpd}
            rsvpToEvent={props.rsvpToEvent}
            key={e.id}
            event={e}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";

// components
import EventCard from "./EventCard";

export default function Events(props) {
  const mapEvents = () => {
    return (
      props.selectedArtistEvents.map(e => (
        <EventCard
          rsvpdEvents={props.rsvpdEvents}
          isEventRsvpd={props.isEventRsvpd}
          rsvpToEvent={props.rsvpToEvent}
          key={e.id}
          event={e}
        />
      ))
    )
    
  };
  return (
    <div className="events-pannel">
      {/* <h4>Events for {props.selectedArtist.name}</h4> */}
      <div className="events">
        {props.selectedArtistEvents ? mapEvents() :
            null
          }
      </div>
    </div>
  );
}

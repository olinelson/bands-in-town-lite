import React from 'react'

// components
import EventCard from "./EventCard"

export default function Events(props) {
  return (
    <div>
        <h4>Events for {props.selectedArtist.name}</h4>
        {props.selectedArtistEvents.map( e => <EventCard isEventRsvpd={props.isEventRsvpd} rsvpToEvent={props.rsvpToEvent} key={e.id} event={e}/>)}


    </div>
  )
}

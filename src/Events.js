import React from 'react'

// components
import EventCard from "./EventCard"

export default function Events(props) {
  return (
    <div>
        <h4>Events for {props.selectedArtist.name}</h4>
        {props.selectedArtistEvents.map( e => <EventCard key={e.id} event={e}/>)}


    </div>
  )
}

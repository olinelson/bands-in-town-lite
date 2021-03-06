import React from "react";

export default function ArtistCard(props) {
  return (
    <div
      className="artist-card"
      onClick={() => props.selectArtist(props.artist)}
    >

      <img alt={props.artist.name} src={props.artist.image_url} />
      <div className="artist-card-body">
        <h4>{props.artist.name}</h4>
        <p>trackers: {props.artist.tracker_count}</p>
        <p>up comming events: {props.artist.upcoming_event_count}</p>
        <p>{props.artist.description}</p>
      </div>
    </div>
  );
}

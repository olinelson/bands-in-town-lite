import React from "react";

import ArtistCard from "./ArtistCard";

import { DebounceInput } from "react-debounce-input";

export default function SearchPannel(props) {


  return (
    <div className="search-pannel">
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={event => props.searchForArtist(event)}
      />
      <h4>Search Pannel</h4>
      <div className="search-results">
        {props.searchResults.map(r => (
          <ArtistCard selectArtist={props.selectArtist} key={r.id} artist={r} />
        ))}
      </div>
    </div>
  );
}

import React from "react";

import ArtistCard from "./ArtistCard";

import { DebounceInput } from "react-debounce-input";


export default function SearchPannel(props) {

  const printSearchResults = () => {
    return (
    props.searchResults.map(r => (
          <ArtistCard selectArtist={props.selectArtist} key={r.id} artist={r} />
        ))
    )
  }
  return (
    <div className="search-pannel">
    
      <div className="search-results">
        {props.searchResults[0] && props.searchResults[0].name ? printSearchResults() : <small>no search results</small>}
      </div>
    </div>
  );
}

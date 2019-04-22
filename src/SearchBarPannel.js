import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DebounceInput } from "react-debounce-input";

export default function SearchBarPannel(props) {
  return (
    <div className="search-bar-pannel">
      <h4>BIT-lite</h4>
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />

        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={event => props.searchForArtist(event)}
        />
      </div>
    </div>
  );
}

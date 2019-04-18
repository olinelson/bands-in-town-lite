import React from 'react'

import ArtistCard from "./ArtistCard"

export default function SearchPannel(props) {

  const artistFormSubmitHandler = (e) => {
    e.preventDefault()
    props.searchForArtist(e)
  }


  return (

    <div className="search-pannel">
      <form onSubmit={artistFormSubmitHandler}>
          <label>Search For Artist</label>
          <input></input>
          <button>Submit</button>
      </form>
      <h4>Search Pannel</h4>
      <div className="search-results">

     {props.searchResults.map( r => <ArtistCard selectArtist={props.selectArtist} key={r.id} artist={r}/>)}
    
      </div>
    </div>
  )
}

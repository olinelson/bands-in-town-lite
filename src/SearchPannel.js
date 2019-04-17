import React from 'react'

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
    
      </div>
    </div>
  )
}

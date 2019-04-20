import React, {Component, Fragment } from "react";

import MapComponent from "./MapComponent";

const uuidv1 = require("uuid/v1");

export default class RsvpCard extends Component {

  state = {
    mapShown: false
  }

cancelHandler = () => {
    this.props.unRsvp(this.props.event);
  };

  hideMap = () => {
    this.setState({mapShown: false})
  }

  render(){
    return (
    <div className="rsvp-card">
      <p>{this.props.event.venue.name}</p>

      <p>{this.props.event.datetime}</p>

      <button onClick={() => this.setState({mapShown: true})}>map</button>

      {this.props.event.offers.map(ofr => (
        <Fragment key={uuidv1()}>
          <a href={ofr.url}>{ofr.type}</a>
          <p>{ofr.status}</p>
        </Fragment>
      ))}
      <a href={this.props.event.url}>More Info</a>

      <button onClick={this.cancelHandler}>cancel</button>

      {this.props.event.venue.latitude && this.state.mapShown === true ? (
        <MapComponent
          latitude={this.props.event.venue.latitude}
          longitude={this.props.event.venue.longitude}
          hideMap={this.hideMap}
        />
      ) : null}
    </div>
  );
  }
  
}

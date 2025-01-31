import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      // Can use >> this refs.map << anywhere else in the app to reference the map
      <div ref="map" />
    )
  }
}

export default GoogleMap;
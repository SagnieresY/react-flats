import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker">&nbsp;</div>;

class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      },
      zoom: 12
    };
  }

  renderMarkerList = () => {
    return this.props.flats.map((flat) => {
      return (
        <Marker
          selected={flat.name === this.props.selectedFlat.name}
          lat={flat.lat}
          lng={flat.lng}
          key={flat.lat}
        />
      );
    });
  }

  render() {
    return (
  // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }} >
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDiw3BCnVB4sZw5SSnowkD5-MOlmunJT6g" }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
          {this.renderMarkerList()}

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

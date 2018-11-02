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
        zoom: 11
      };
    }

      render() {
        return (
      // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDiw3BCnVB4sZw5SSnowkD5-MOlmunJT6g" }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
              >
              <Marker
                lat={this.props.selectedFlat.lat}
                lng={this.props.selectedFlat.lng}
              />
            </GoogleMapReact>
          </div>
        );
      }
    }

    export default Map;

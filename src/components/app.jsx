import React, { Component } from 'react';
import Flatlist from './flatlist.jsx';
import Map from './map.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  render() {
    return (
      <div>
        <Flatlist flats={this.state.flats}/>
        <div className="map-container"> <Map /></div>
      </div>
    );
  }
}


export default App;

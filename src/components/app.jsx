import React, { Component } from 'react';
import Flatlist from './flatlist.jsx';
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
        <div className="map-container"></div>
      </div>
    );
  }
}


export default App;

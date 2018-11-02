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

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <Flatlist
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat} />
        <div className="map-container">
          <Map
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
            flats={this.state.flats}
          />
        </div>
      </div>
    );
  }
}


export default App;

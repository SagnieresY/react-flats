import React, { Component } from 'react';
import Flat from './flat.jsx';

const Flatlist = ({ flats }) => {
 return(
  <div className="flat-list">
    {flats.map((flat, index) =>
      <Flat flat={flat}
      key={flat.lat}
      index={index} />)}
  </div>
  );
};

export default Flatlist;




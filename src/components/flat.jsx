import React, { Component } from 'react';

class Flat extends Component {

  handleMouseOver = () => {
      this.props.selectFlat(this.props.index);
      document.getElementsByClassName("marker")[this.props.index].setAttribute("style", "transform: scale(2); background-color: blue;");
  }

  handleMouseOut = () => {
    document.getElementsByClassName("marker")[this.props.index].removeAttribute("style", "background-color: blue;");

  }

  render() {

    const styles = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3),
                        rgba(0,0,0,0.2)),
                        url('${this.props.flat.imageUrl}')`
    }

    return (
        <div className={`card ${this.props.selected ? 'active' : {}}`} style={styles} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description">
            <h2>{this.props.flat.name}</h2>
          </div>
          <a className="card-link" href="#"></a>
        </div>
      );
  }
}

export default Flat;

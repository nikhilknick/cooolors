import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack() {
    this.props.history.push(`/palette/${this.props.match.params.paletteId}`);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    //return all shades of given color
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map((color, index) => (
      <ColorBox
        key={index}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar />
        <h1>More palette</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
        
        <button onClick={this.handleBack}>Go bk</button>
      </div>
    );
  }
}

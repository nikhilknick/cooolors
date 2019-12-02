import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from './PaletteFooter';


export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
        format: "hex"
    }
    this.handleBack = this.handleBack.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
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
  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const {format} = this.state;
    const colorBoxes = this._shades.map((color, index) => (
      <ColorBox
        key={index}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    const {paletteName, emoji} = this.props.palette;
    return (
      <div className="Palette">
        <Navbar showSlider={false} handleChange={this.changeFormat}/>
        <div className='Palette-colors'>{colorBoxes}</div>
        
        <button onClick={this.handleBack}>Go bk</button>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}

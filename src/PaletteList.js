import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import "./PaletteList.css";

export default class PaletteList extends Component {
  goToPalette(id){
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes } = this.props;
    return (
      <div className="PaletteList">
        <h1>C0L0RS</h1>
        <div className="List">
          {palettes.map((palette,index) => (
            <MiniPalette {...palette} handleClick={()=>this.goToPalette(palette.id)} key={index}/>
          ))}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import ColorBox from "./ColorBox";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level){
      this.setState({level});
  }

  render() {
    const {level} = this.state;
    const {colors} = this.props.palette
    const colorBoxes = colors[level].map(
      color => <ColorBox background={color.hex} name={color.name} />
    );

    return (
      <div className="Palette">
          <div className="slider">
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        </div>
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

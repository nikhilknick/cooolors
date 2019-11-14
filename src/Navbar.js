import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "rc-slider/assets/index.css";
import "./Navbar.css";


export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      format:"hex",
      open:false
    }
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e){
    this.setState({format:e.target.value,open:true});
    this.props.handleChange(e.target.value);
  }
  closeSnackbar(){
    this.setState({open:false});
  }


  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;


    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">reactcolorpicker</a>
        </div>

        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255)</MenuItem>
          </Select>
        </div>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        onClose={this.closeSnackbar}
        autoHideDuration={1500}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={this.closeSnackbar}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />

      </header>
    );
  }
}

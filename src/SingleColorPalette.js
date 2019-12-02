import React, { Component } from 'react';
import Navbar from './Navbar';

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }
    handleBack(){
        this.props.history.push(`/palette/${this.props.match.params.paletteId}`);
    }
    render() {
        return (
            <div>
                <Navbar/>
                <h1>More palette</h1>
                <button onClick={this.handleBack}>Go bk</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class PaletteList extends Component {
    render() {
        return (
            <div>
                <h1>React Color</h1>
                {this.props.palettes.map(palette=>(<p><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>))}
            </div>
        )
    }
}

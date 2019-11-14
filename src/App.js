import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import {Route, Switch} from "react-router-dom";

class App extends React.Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" render={()=><h1>Palette page</h1>}/>
        <Route exact path="/palette/:id" render={()=><h1>Palette indi</h1>}/>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[3])} />
      // </div>
    );
  }
}

export default App;

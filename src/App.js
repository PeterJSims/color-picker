import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import SeedColors from './SeedColors';
import { generatePalette } from './ColorHelpers';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <h1>Palette List Goes Here </h1>} />
				<Route exact path="/palette/:id" render={() => <h1>Individual Palette</h1>} />
			</Switch>
		);
	}
}
export default App;

/* <div className="App">
				<Palette palette={generatePalette(SeedColors[4])} />
			</div> */

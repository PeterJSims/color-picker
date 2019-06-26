import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import SeedColors from './SeedColors';
import PaletteList from './PaletteList';
import { generatePalette } from './ColorHelpers';

class App extends Component {
	findPalette(id) {
		return SeedColors.find(function(palette) {
			return palette.id === id;
		});
	}
	render() {
		return (
			<Switch>
				<Route exact path="/" render={(routeProps) => <PaletteList palettes={SeedColors} {...routeProps} />} />
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
				<Route exact path="/palette/:paletteId/:colorId" render={() => <h1>Single Color Page </h1>} />
			</Switch>

			// <div>
			//   <Palette palette={generatePalette(seedColors[4])} />
			// </div>
		);
	}
}

export default App;

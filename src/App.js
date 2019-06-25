import React, { Component } from 'react';
import Palette from './Palette';
import SeedColors from './SeedColors';
import { generatePalette } from './ColorHelpers';

class App extends Component {
	render() {
		console.log(generatePalette(SeedColors[4]));
		return (
			<div className="App">
				<Palette palette={generatePalette(SeedColors[4])} />
			</div>
		);
	}
}
export default App;

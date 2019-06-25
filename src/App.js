import React, { Component } from 'react';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';

import SeedColors from './SeedColors';

class App extends Component {
	render() {
		console.log(generatePalette(SeedColors[4]));
		return (
			<div className="App">
				<Palette {...SeedColors[2]} />
			</div>
		);
	}
}
export default App;

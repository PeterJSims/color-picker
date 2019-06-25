import React, { Component } from 'react';
import Palette from './Palette';
import SeedColors from './SeedColors';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Palette {...SeedColors[3]} />
			</div>
		);
	}
}
export default App;

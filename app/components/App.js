var React = require('react');
var Popular = require('./Popular');

// Compenent Definition

class App extends React.Component {
	// whatever is rendering would be the UI of the component
	render() {
		return (
			<div className="container">
				<Popular />
			</div>

			// gives us JSX to write out the UI
			)
	}
}

module.exports = App;
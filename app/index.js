var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

// Compenent Definition

class App extends React.Component {
	// whatever is rendering would be the UI of the component
	render() {
		return (
			<div>
				Hello World
			</div>

			// gives us JSX to write out the UI
			)
	}
}

// here, we render the component to the DOM

ReactDom.render (
	<App />,
	document.getElementById('app')
	);
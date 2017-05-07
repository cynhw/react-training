var React = require('react');
var ReactDom = require('react-dom');
// var PropTypes = require('prop-types');
require('./index.css');
var App = require('./components/App');

// here, we render the component to the DOM

ReactDom.render (
	<App />,
	document.getElementById('app')
	);

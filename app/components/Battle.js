var React = require('react');
var PropTypes = require('prop-types');

class PlayerInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		}

		this.handleChange = this.handleChange.bind(this);

	}

handleChange(event) {
	var value = event.target.value;

	this.setState(function () {
		return {
			username: value
			// this will update the input field
		}
	})
}

handleSubmit(event) {
	event.preventDefault();

	this.props.onSubmit(
		this.props.id,
		this.state.username
	)
}

	render() {
		return (
			<form className="column" onSubmit={this.handleSubmit()}>
				<label className="header" htmlFor="username">
					{this.props.label}
				</label>
				<input 
					id="username"
					placeholder="github username"
					type="text"
					autoComplete="off"
					value={this.state.username}
					onChange={this.handleChange}
					/>
			</form>
			<button
				className="button"
				type="submit"
				disable={!this.state.username}>
				Submit
			</button>
			)
	}
}

PlayerInput.propTypes = {
	id: PropTypes.string.isRequired,
	lable: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playerOneName: '',
			playerTwoName: '',
			playerOneImage: null,
			playerTwoImage: null
		}

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	// create the function where the child would change the state in the parent

	handleSubmit(id, username) {
		this.setState(function() {
			var newState = {};
			newState[id + 'Name'] = username;
			newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
			return newState;
		});
	}

	render() {
		var playerOneName = this.state.playerOneName;
		var playerTwoName = this.state.playerTwoName;
		return(
			<div>
				<div className="row">
					{!playerOneName && 
						<PlayerInput 
							id="playerOne"
							label="Player One"
							onSubmit={this.handleSubmit()}
						/>}

					{!playerTwoName && 
						<PlayerInput 
							id="playerTwo"
							label="Player Two"
							onSubmit={this.handleSubmit()}
						/>}
				</div>
			</div>
		)
	}
}

module.exports = Battle;
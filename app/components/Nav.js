var React= require('react');
var NavLink = require('react-router-dom').NavLink;

// be able to style the nav based on whenever the link is active or not aka if the user is on the router or not
// .NavLink actually lives in Link

function Nav () {
	return (
		<ul className='nav'>
			<li>
				<NavLink exact activeClassName='active' to='/'>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink activeClassName='active' to='/battle'>
					Battle
				</NavLink>
			</li>

			<li>
				<NavLink activeClassName='active' to='/popular'>
					Popular
				</NavLink>
			</li>
		</ul>
	)
}

module.exports = Nav;
import React from "react";
import PropTypes from "prop-types";

// display one instance of user
const User = props => {
	return (
		<li>
			{props.user.username}
			<span>
				{
					props.showGames ? ` played ${props.user.gamesPlayed}` :
					" *"}
			</span>
		</li>
	);
};

User.propTypes = {
	user: PropTypes.object.isRequired,
	showGames: PropTypes.bool.isRequired
};

export default User;

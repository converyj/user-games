import React, { Component } from "react";
import PropTypes from "prop-types";
import User from "./User";

class UserList extends Component {
	state = {
		showGames: true
	};

	// toggle state to show/hide games played
	toggleBtn = () => {
		this.setState({
			showGames: !this.state.showGames
		});
	};
	render() {
		return (
			<div>
				<h1>Users</h1>
				<button className='smallButton' onClick={this.toggleBtn}>
					{
						this.state.showGames ? "Hide " :
						"Show "}
					the Number of Games Played
				</button>
				<div>
					<ol>
						{this.props.users.map(user => (
							<User
								key={user.username}
								user={user}
								showGames={this.state.showGames}
							/>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

UserList.propTypes = {
	users: PropTypes.array.isRequired
};

export default UserList;

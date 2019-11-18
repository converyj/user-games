import React, { Component } from "react";
import PropTypes from "prop-types";

class AddUser extends Component {
	state = {
		user: {
			firstName: "",
			lastName: "",
			username: ""
		},
		userExist: false
	};

	// save form fields to user in state
	handleChange = e => {
		this.setState({
			user: {
				...this.state.user,
				[e.target.name]: e.target.value
			}
		});
	};

	// check if username exists
	userExisting = currUsername => {
		const users = this.props.users;
		for (let user of users) {
			if (user.username === currUsername) {
				return true;
			}
		}
		return false;
	};

	// disable ADD button if all fields are filled in
	isDisabled = () => {
		const { firstName, lastName, username } = this.state.user;
		return firstName === "" || lastName === "" || username === "";
	};

	// create user by check if user exists
	createUser = e => {
		e.preventDefault();
		const userExist = this.userExisting(this.state.user.username);
		if (!userExist) {
			this.props.createUser(this.state.user);

			this.setState({
				user: {
					firstName: "",
					lastName: "",
					username: ""
				}
			});
		}
		this.setState({
			userExist
		});
	};
	render() {
		return (
			<div>
				<h1>New User</h1>
				<form onSubmit={this.createUser}>
					<input
						type='text'
						name='firstName'
						value={this.state.user.firstName}
						onChange={this.handleChange}
					/>
					<input
						type='text'
						name='lastName'
						value={this.state.user.lastName}
						onChange={this.handleChange}
					/>
					<input
						type='text'
						name='username'
						value={this.state.user.username}
						onChange={this.handleChange}
					/>
					<button disabled={this.isDisabled()}>Add</button>
				</form>
				{this.state.userExist && (
					<p className='error'>User already exists</p>
				)}
			</div>
		);
	}
}

AddUser.propTypes = {
	users: PropTypes.array.isRequired,
	createUser: PropTypes.func.isRequired
};

export default AddUser;

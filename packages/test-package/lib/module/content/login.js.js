import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import MainLayout from './mainLayout.jsx';
import {Accounts} from 'meteor/accounts-base';

export default class LoginPage extends Component {
	login(event) {
		event.preventDefault();
		let email = this.refs.uname.value;
		let pwd = this.refs.pwd.value;
		Meteor.loginWithPassword(email, pwd,(error,succes)=>{
			if(error) {
				Bert.alert("User Not Found","warning","growl-top-right","fa-info")
			} else {
				let user = 
				Bert.alert("Welcome "+Meteor.user().username,"success","growl-top-right","fa-check")
			}
		});
	}
	render() {
		return(
			<div className="container-fluid ">
				<div className="row login ">
					<div className="col-sm-6 offset-sm-3">
						<form className="align-middle">
						  	<div className="imgcontainer">
						    	<i className="fa fa-user" aria-hidden="true"></i>
						    	<h3>Deligence</h3>
						  	</div>
						  	<div className="container">
						    	<label htmlFor="uname"><b>Username</b></label>
						    		<input type="text" placeholder="Enter Username" ref="uname" required />
						    		<label htmlFor="psw"><b>Password</b></label>
						    		<input type="password" placeholder="Enter Password" ref="pwd" required />
						    		<button type="submit" onClick={this.login.bind(this)}>Login</button>
						  	</div>
						  	<div className="container">
						  	<button type="button" className="btn btn-primary cancelbtn" data-toggle="modal" data-target="#SignUpModal">SignUp</button>
						    <span className="psw"><a href="#">Forgot  password?</a></span>
						  </div>
						</form>
					</div>
				</div>
				<SignUp />
			</div>
		);
	}
}
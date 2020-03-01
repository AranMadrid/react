import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios'

class RegisterComponent extends Component {
	
    constructor(props){
    	super(props)

    	this.state = {
    		username: '',
    		password: ''
    	}
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    nextHandler = e => {
        this.props.history.push("/login");
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://34.89.93.186:8080/apiv1/register', this.state)
        .then(response => {
            this.props.history.push("/login");
        })
        .catch(error  => {
            console.log(error)
        })
    }

	render() {
		const { username, password } = this.state
		return (
		  <div>	
			  <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="username">user name: </label>
                    <input id="username" type="text" name="username" value={username} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="password">password: </label>
                    <input id="password" type="password" name="password" value={password} onChange={this.changeHandler}/>
                </div>
                <button type="submit">Registrar</button>
                <button onClick={this.nextHandler}>Ya tengo cuenta</button>
              </form>
	      </div>
	    )

	}
}

export default RegisterComponent;
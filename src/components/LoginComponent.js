import React, { Component } from 'react';
import axios from 'axios'

class LoginComponent extends Component {
	
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

    backHandler = e => {
        this.props.history.push("/");
    }

    submitHandler = e => {
        e.preventDefault()
        axios.request({url:'http://34.89.93.186:8080/apiv1/login', method:'post' , withCredentials:true, data:{ username:this.state.username, password:this.state.password, }})
        .then(response => {
            this.props.history.push("/anuncios");
        })
        .catch(error => {
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
                <button type="submit">Login</button>
                <button onClick={this.backHandler}>No tengo cuenta</button>
              </form>
          </div>
        )
	}
}

export default LoginComponent;
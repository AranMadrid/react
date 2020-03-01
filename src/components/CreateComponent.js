import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios'

class CreateComponent extends Component {
	
    constructor(props){
    	super(props)

    	this.state = {
    	   name: '',
           price: 0,
           description: '',
           tags: ['motor'],
           type: 'sell',
           photo: ''
    	}
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    exitHandler = e => {
        this.props.history.push("/anuncios");
    }

    submitHandler = e => {
        e.preventDefault()
        axios.request({url:'http://34.89.93.186:8080/apiv1/anuncios', method:'post', withCredentials:true, data:{ name:this.state.name, price:this.state.price, description:this.state.description, tags:this.state.tags, type:this.state.type, photo:this.state.photo }})
        .then(response => {
            this.props.history.push("/anuncios");
        })
        .catch(error  => {
            console.log(error)
        })
    }

	render() {
		const { name, price, description, photo } = this.state
		return (
		  <div>	
              Crear nuevo anuncio
			  <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="name">name: </label>
                    <input id="name" type="text" name="name" value={name} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="price">price: </label>
                    <input id="price" type="number" name="price" value={price} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="description">description: </label>
                    <input id="description" type="text" name="description" value={description} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="photo">photo (link): </label>
                    <input id="photo" type="text" name="photo" value={photo} onChange={this.changeHandler}/>
                </div>
                <button type="submit">Registrar</button>
                <button onClick={this.exitHandler}>Volver</button>
              </form>
	      </div>
	    )

	}
}

export default CreateComponent;
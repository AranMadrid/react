import React, { Component } from 'react';
import axios from 'axios';
import MyStyles from './MyStyles.css';

class EditComponent extends Component {
    
   constructor(props){
        super(props)

        this.state = {
           name: '',
           price: 0,
           description: '',
           tags: [],
           type: '',
           photo: ''
        }
    }

    componentDidMount() {
        axios.request({url:'http://34.89.93.186:8080/apiv1/anuncios/' + this.props.match.params.id, method:'get' , withCredentials:true})
        .then(response => {
            this.setState({
              name: response.data.result.name,
              price: response.data.result.price,
              description: response.data.result.description,
              tags: response.data.result.tags,
              type: response.data.result.type,
              photo: response.data.result.photo
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error obteniendo la data'})
        })
    }

    exitHandler = e => {
        this.props.history.push("/anuncios");
    }

    submitHandler = e => {
        e.preventDefault()
        axios.request({url:'http://34.89.93.186:8080/apiv1/anuncios?id=' + this.props.match.params.id, method:'put', withCredentials:true, data:{ name:this.state.name, price:this.state.price, description:this.state.description, tags:this.state.tags, type:this.state.type, photo:this.state.photo }})
        .then(response => {
            this.props.history.push("/anuncios");
        })
        .catch(error  => {
            console.log(error)
        })
    }

    render() {
        const { name, price, description, photo, errorMsg } = this.state
        return (
          <div> 
              Edición del producto
              <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="name">name: </label>
                    <input id="name" type="text" name="name" defaultValue={name} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="price">price: </label>
                    <input id="price" type="number" name="price" defaultValue={price} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="description">description: </label>
                    <input id="description" type="text" name="description" defaultValue={description} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="photo">photo (link): </label>
                    <input id="photo" type="text" name="photo" defaultValue={photo} onChange={this.changeHandler}/>
                </div>
                <button type="submit">Actualizar</button>
                <button onClick={this.exitHandler}>Volver</button>
              </form>
              { errorMsg ? <div>{errorMsg}</div> : null }
              
          </div>
        )
    }
}

export default EditComponent;


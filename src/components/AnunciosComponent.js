import React, { Component } from 'react';
import axios from 'axios';
import MyStyles from './MyStyles.css';

class AnunciosComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.request({url:'http://34.89.93.186:8080/apiv1/anuncios', method:'get' , withCredentials:true})
        .then(response => {
            this.setState({posts: response.data.results})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error obteniendo la data'})
        })
    }

    exitHandler = e => {
        this.props.history.push("/login");
    }

    detailHandler = e => {
        this.props.history.push("/detail/" + e.target.name);
    }

    editHandler = e => {
        this.props.history.push("/edit/" + e.target.name);
    }

    createHandler = e => {
        this.props.history.push("/create");
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
          <div> 
              Anuncios
              <button onClick={this.createHandler}>Crear un nuevo anuncio</button>
              <button onClick={this.exitHandler}>Logout</button>
              {
                posts.length ?
                posts.map(post => <div className="card">
                                    <img src={post.photo} className="card-img-top" alt="..." width="300"/>
                                    <span className="price">{post.price} €</span>
                                    <div className="card-body text-justify">
                                        <h5 className="card-title text-uppercase mb-1 font-weight-bold">
                                          {post.name} 
                                        </h5>
                                        <p className="card-text text-black-50"><small>{post.description}</small></p>
                                    </div>
                                    <div className="card-footer text-muted py-1 px-2">
                                      <p className="card-text mb-1">  
                                      </p>
                                      <button onClick={this.detailHandler} name={post._id} >Detalle</button>
                                      <button onClick={this.editHandler} name={post._id} >Editar</button>
                                      <small id="passwordHelpInline" className="text-muted">
                                      </small>
                                    </div>
                                </div>) : null
              }
              { errorMsg ? <div>{errorMsg}</div> : null }
              
          </div>
        )
    }
}

export default AnunciosComponent;


import React, { Component } from 'react';
import axios from 'axios';
import MyStyles from './MyStyles.css';

class DetailComponent extends Component {
    
   constructor(props){
        super(props)

        this.state = {
            name: '',
            description: '',
            price: 0,
            photo: '',
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.request({url:'http://34.89.93.186:8080/apiv1/anuncios/' + this.props.match.params.id, method:'get' , withCredentials:true})
        .then(response => {
            this.setState({
              name: response.data.result.name,
              description: response.data.result.description,
              price: response.data.result.price,
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

    render() {
        const { name, description, price, photo, errorMsg } = this.state
        return (
          <div> 
              Detalle del producto
              <button onClick={this.exitHandler}>Volver</button>
              <div className="card">
                    <img src={photo} className="card-img-top" alt="..." width="300"/>
                    <span className="price">{price} €</span>
                    <div className="card-body text-justify">
                        <h5 className="card-title text-uppercase mb-1 font-weight-bold">
                          {name} 
                        </h5>
                        <p className="card-text text-black-50"><small>{description}</small></p>
                    </div>
                    <div className="card-footer text-muted py-1 px-2">
                      <p className="card-text mb-1">  
                      </p>
                      <small id="passwordHelpInline" className="text-muted">
                      </small>
                    </div>
                </div>
              { errorMsg ? <div>{errorMsg}</div> : null }
              
          </div>
        )
    }
}

export default DetailComponent;


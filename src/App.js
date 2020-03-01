import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import AnunciosComponent from './components/AnunciosComponent';
import DetailComponent from './components/DetailComponent';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <BrowserRouter>
	          <Switch>
	            <Route
	              path="/" 
	              exact
	              component={RegisterComponent} />
	              <Route
	              path="/login" 
	              exact
	              component={LoginComponent} />
	      		  <Route
	              path="/anuncios" 
	              exact
	              component={AnunciosComponent} />
	              <Route
	              path="/detail/:id" 
	              component={DetailComponent} />
	              <Route
	              path="/create" 
	              component={CreateComponent} />
	              <Route
	              path="/edit/:id" 
	              component={EditComponent} />
	          </Switch>
	      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;

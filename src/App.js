import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';

import Container from './containers/Container.js';
import { Provider } from "react-redux";
import Store from './reducer/combo_reducer.js';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Provider store={Store}>
         <Container/>
      </Provider>     
       
      </div>
    );
  }
}

 export default App;

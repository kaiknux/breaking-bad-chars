import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import './App.scss';
import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}><Layout /></Provider>
      </div>
    );
  }
}

export default App;

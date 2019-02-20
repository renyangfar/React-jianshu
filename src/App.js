import React, { Component } from 'react';
import Header from './common/header/index.js'
import store from './store/index.js'
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Header />
      </Provider>
    );
  }
}


export default App;

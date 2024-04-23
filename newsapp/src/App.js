import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <News pageSize={20} country='in' category='science'/>
      </>
    );
  }
}

export default App;
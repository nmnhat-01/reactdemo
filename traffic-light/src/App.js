import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TrafficLight from './components/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentColor: RED
    };

    setInterval(() => {
      this.setState({
          currentColor : this.getNextColor(this.state.currentColor)
      });
    }, 2000);
  }

  getNextColor(color) {
    switch(color) {
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
  }

  render() {
    const { currentColor } = this.state;

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <TrafficLight currentColor={currentColor}/>
      </div>
    );
  }
}

export default App;

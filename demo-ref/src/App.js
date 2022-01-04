import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount(){
    setTimeout(() => this.inputElement.current.focus(), 2000);
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" className="" ref={this.inputElement}/>
      </div>
    );
  }
  
}

export default App;

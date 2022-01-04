import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';

import AwesomeImage from './components/AwesomeImage';
// import HoverOpacity from './components/HoverOpacity';
import withHoverOpacity from './components/withHoverOpacity';

const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage, 0.8);

function App() {
  return (
    <div className="App">
      <HoverOpacityAwesomeImage src="http://picsum.photos/200/300"/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

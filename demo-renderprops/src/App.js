import React from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';
import Counter from './components/Counter';
import NumberProvider from './components/NumberProvider';

import NumberContext from './contexts/NumberContext';

const data = ["A", "B", "C"];

//Provider //Consumer

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

          <NumberContext.Consumer>
            {({ number, updateNumber }) => (
              <div>
                <h2>{number}</h2>
                <button onClick={updateNumber}>UpdateNumber</button>
              </div>
            )}
          </NumberContext.Consumer>

        <List data={data} render={(item) => <div>{item}</div>}/>
        <Counter>
          {({ count }) => <h1>{count}</h1>}
        </Counter>
      </div>
    </NumberProvider>
  );
}

export default App;

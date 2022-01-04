import logo from './logo.svg';
import './App.css';

import RandomNumber from './components/RandomNumber';

import {NumberProvider} from './contexts/NumberContext';

//Provider //Consumer

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <RandomNumber/>
      </div>
    </NumberProvider>
  );
}
export default App;

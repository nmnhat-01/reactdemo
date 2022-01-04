import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import Counter2 from './components/Counter2';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter/>
      <Counter2/>
    </div>
  );
}

export default App;

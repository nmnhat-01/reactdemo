import logo from './logo.svg';
import './App.css';

import Accordion from './components/Accordion'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Accordion heading="Heading">
        Demo children lesson
      </Accordion>
    </div>
  );
}

export default App;

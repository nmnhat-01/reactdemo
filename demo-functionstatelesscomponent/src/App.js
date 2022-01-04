import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import Card2 from './components/Card2';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <Card imageUrl="http://picsum.photos/300/200">
        <p>Card body</p>
      </Card>

      <Card2 imageUrl="http://picsum.photos/350/200">
        <p>Card body 2</p>
      </Card2>
    </div>
  );
}

export default App;

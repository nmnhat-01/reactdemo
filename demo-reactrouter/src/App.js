import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import { CartProvider } from './contexts/Cart';

const Index = () => <h2>Home</h2>

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <TopMenu />
          
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

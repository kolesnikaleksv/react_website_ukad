import './App.css';
import Navbar from './components/navbars';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';
import Products from './components/product';
import Home from './components/homes';


function App() {
  return (
    <Router>
      <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products} ></Route>
        <Route exact path="/home" component={Home} ></Route>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

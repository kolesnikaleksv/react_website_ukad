import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';
import Products from './components/products';
import Home from './components/home';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products} ></Route>
        <Route exact path="/home" component={Home} ></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

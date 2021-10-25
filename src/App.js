import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';
import Products from './components/Products';
import Home from './components/Home';


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

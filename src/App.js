import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';
import Cards from './components/cards';


function App() {
  return (
    <Router>
      <Navbar />
      <Cards />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

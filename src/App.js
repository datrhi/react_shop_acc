import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar';
import Home from './component/pages/Home';
import Footer from './component/Footer/Footer';
import History from './component/pages/History';
import Purchase from './component/pages/Purchase';
import CardPurchasing from './component/pages/CardPurchasing';
import Banking from './component/pages/Banking';
import SignIn from './component/pages/SignIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/history' component={History} />
        <Route exact path='/purchase' component={Purchase}/>
        <Route exact path='/card-purchasing' component={CardPurchasing}/>
        <Route exact path='/banking' component={Banking}/>
        <Route exact path='/sign-in' component={SignIn}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

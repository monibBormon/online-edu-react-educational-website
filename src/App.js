import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/blogs'>
            <Blog></Blog>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Loginform from './components/login';
import Signup from './components/signup';
import Nav from './components/nav';
// import './nav.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/signup' component={Signup}></Route>
                        <Route exact path='/login' component={Loginform}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;




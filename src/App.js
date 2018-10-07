import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Home from './Home';
import StateAndProps from './state-and-props';
import ComponentApi from './Component-Api';
import ComponentLifecycle from './Component-Lifecycle';
import FormSample from './Form-Sample';
import FormChildDemo from './Form-Child-Demo';
import EventsDemo from './Events-Demo';
import RefsDemo from './RefsDemo';
import KeysDemo from './KeysDemo';
import ColoredBlock from './ColoredBlock';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/StateAndProps'}>State and Props Demos</Link></li>
                            <li><Link to={'/ComponentApi'}>Component API Demos</Link></li>
                            <li><Link to={'/ComponentLifecycle'}>Component Lifecycle Demos</Link></li>
                            <li><Link to={'/FormSample'}>Form Sample Demos</Link></li>
                            <li><Link to={'/FormChildDemo'}>Form Child Demos</Link></li>
                            <li><Link to={'/EventsDemo'}>Events Demos</Link></li>
                            <li><Link to={'/RefsDemo'}>Refs Demos</Link></li>
                            <li><Link to={'/KeysDemo'}>Keys Demos</Link></li>
                            <li><Link to={'/OneWayBinding'}>One Way Binding Demos</Link></li>
                        </ul>

                    </div>
                    <Switch>
                            <Route exact path='/' component={Home} />
                            {/* <Route exact path='/StateAndProps' component={StateAndProps} */}
                            <Route exact path='/StateAndProps' render={props => <StateAndProps {...this.props} />} />
                            <Route exact path='/ComponentApi' component={ComponentApi} />
                            <Route exact path='/ComponentLifecycle' component={ComponentLifecycle} />
                            <Route exact path='/FormSample' component={FormSample} />
                            <Route exact path='/FormChildDemo' component={FormChildDemo} />
                            <Route exact path='/EventsDemo' component={EventsDemo} />
                            <Route exact path='/RefsDemo' component={RefsDemo} />
                            <Route exact path='/KeysDemo' component={KeysDemo} />
                            <Route exact path='/OneWayBinding' component={ColoredBlock} />
                        </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

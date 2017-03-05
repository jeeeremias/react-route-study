import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './modules/App'
import Family from './modules/Family'
import Relative from './modules/Relative'
import Friends from './modules/Friends'
import Friend from './modules/Friend'
import Home from './modules/Home'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/family" component={Family}>
                <Route path="/family/:member/:name" component={Relative}/>
            </Route>
            <Route path="/friends" component={Friends}>
                <Route path="/friends/:name" component={Friend}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))
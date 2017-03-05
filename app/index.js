import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Family from './modules/Family'
import Friends from './modules/Friends'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/family" component={Family}/>
            <Route path="/friends" component={Friends}/>
        </Route>
    </Router>
), document.getElementById('app'))
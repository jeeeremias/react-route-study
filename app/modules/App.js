import React from 'react'
import {Link, IndexLink} from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default ({children}) => (
    <div>
        <h1>Birds of a feather flock together</h1>
        <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
            <li><NavLink to="/family">Family</NavLink></li>
            <li><NavLink to="/friends">Friends</NavLink></li>
        </ul>
        {children}
    </div>
)
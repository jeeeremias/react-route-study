import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'

export default ({children}) => (
    <div>
        <h1>People that make me good</h1>
        <ul role="nav">
            <li><NavLink to="/family">Family</NavLink></li>
            <li><NavLink to="/friends">Friends</NavLink></li>
        </ul>
        {children}
    </div>
)
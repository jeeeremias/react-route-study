import React from 'react'
import {Link} from 'react-router'

export default ({children}) => (
    <div>
        <h1>People that make me good</h1>
        <ul role="nav">
            <li><Link to="/family">Family</Link></li>
            <li><Link to="/friends">Friends</Link></li>
        </ul>
        {children}
    </div>
)
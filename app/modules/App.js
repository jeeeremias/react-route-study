import React from 'react'
import {Link} from 'react-router'

export default () => (
    <div>
        <h1>Let's know all people that I love</h1>
        <ul role="nav">
            <li><Link to="/family">Family</Link></li>
            <li><Link to="/friends">Friends</Link></li>
        </ul>
    </div>
)
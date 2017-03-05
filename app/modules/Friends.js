import React from 'react'
import NavLink from './NavLink'

export default ({children}) => (
    <div>
    <h2>Let's know my second family</h2>
        <ul>
            <li><NavLink to="/friends/Jennifer">Jennifer</NavLink></li>
            <li><NavLink to="/friends/Lucas">Lucas</NavLink></li>
            <li><NavLink to="/friends/Carlos">Carlos</NavLink></li>
            <li><NavLink to="/friends/Luiza">Luiza</NavLink></li>
        </ul>
        {children}
    </div>
)
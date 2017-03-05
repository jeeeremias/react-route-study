import React from 'react'
import NavLink from './NavLink'

export default ({children}) => (
    <div>
        <h2>Let's know my family</h2>
        <ul>
            <li><NavLink to="/family/mother/Eva">Mother</NavLink></li>
            <li><NavLink to="/family/father/Abilio">Father</NavLink></li>
            <li><NavLink to="/family/sister/Luana">Sister</NavLink></li>
            <li><NavLink to="/family/brother/Gabriel">Brother</NavLink></li>
        </ul>
        {children}
    </div>
)
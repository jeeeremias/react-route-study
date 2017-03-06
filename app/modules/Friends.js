import React from 'react'
import NavLink from './NavLink'

const Friends = ({children}, context) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements[0].value;
        const path = `/friends/${name}`;
        context.router.push(path);
    };
    
    return (
        <div>
            <h2>Let's know my second family</h2>
            <ul>
                <li><NavLink to="/friends/Jennifer">Jennifer</NavLink></li>
                <li><NavLink to="/friends/Lucas">Lucas</NavLink></li>
                <li><NavLink to="/friends/Carlos">Carlos</NavLink></li>
                <li><NavLink to="/friends/Luiza">Luiza</NavLink></li>
                <li>Let's become friends!
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="your name"/>{' '}
                        <button type="submit">Add friend</button>
                    </form>
                </li>
            </ul>
            {children}
        </div>
    )
}

Friends.contextTypes = {
    router: React.PropTypes.object
};

export default Friends;
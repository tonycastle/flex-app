import React from 'react'
import { Link } from 'react-router-dom'
import '../app.css'

const Nav = () => {
    return (
        <section id='navbar'>
            <ul>
                <li className='navlinks'><Link to='/Profile'>Profile</Link></li>
                <li className='navlinks'><Link to='/Register'>Register</Link></li>
                <li className='navlinks'><Link to='/Contact'>Contact</Link></li>
            </ul>
        </section>
    );
};

export default Nav;
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    const navStyle = {
        color: 'blue',
        lineStyle: 'none'
    }
    return (
        <section>
            <ul>
                <li><Link style = {navStyle} to='/Profile'>Profile</Link></li>
                <li><Link style = {navStyle} to='/Register'>Register</Link></li>
                <li><Link style = {navStyle} to='/Contact'>Contact</Link></li>
            </ul>
        </section>
    );
};

export default Nav;
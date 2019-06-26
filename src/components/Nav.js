import React from 'react'
import { Link } from 'react-router-dom'
import '../app.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-secondary flex-md-nowrap shadow">
            <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
                FLEX    
            </Link>
            
            <ul className="nav px-3">
            <li className="nav-item text-nowrap"><Link className='nav-link text-white' to='/Profile'>Profile</Link></li>
            <li className="nav-item text-nowrap"><Link className='nav-link text-white' to='/Register'>Register</Link></li>
            <li className="nav-item text-nowrap"><Link className='nav-link text-white' to='/Contact'>Contact</Link></li>
            <li className="nav-item text-nowrap">
                <a class="nav-link  text-white" href="#">Sign out</a>
            </li>
  </ul>
       </nav>
    );
};

export default Nav;
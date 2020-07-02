import React, {Component} from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-light">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to="/data-state">Data State</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/state-management">State Management</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/multi-user">Multi Array</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/array-one">Array One</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/doctor">Doctor</Link>
                </li>
        
                <li className="nav-item">
                <Link className="nav-link text-white" to="/crud">CRUD</Link>
                </li>
				
				<li className="nav-item">
                <Link className="nav-link text-white" to="/company">Company</Link>
                </li>
                
            </ul>
        </nav>

        );
    }
}

export default Header;


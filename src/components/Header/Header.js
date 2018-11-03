import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <nav className="Header navbar justify-content-center navbar-dark bg-dark fixed-top">

                <Link className="navbar-brand" to={'/'}>
                    <img src="/image/logo-paws.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <span className={"mx-2"}>Doggie Match</span>
                </Link>

                <button className="btn btn-outline-alert my-2 my-sm-0 mx-1" >
                    <Link to={'/search'}>Search</Link>
                </button>
                <button className="btn btn-outline-alert my-2 my-sm-0 mx-1">
                    <Link to={'/post'}>Post</Link>
                </button>
                <button className="btn btn-outline-alert my-2 my-sm-0 mx-1">
                    <Link to={'/signUp'}>Join</Link>
                </button>
                <button className="btn btn-outline-success my-2 my-sm-0 mx-1">
                    <Link to={'/login'}>Sign-In</Link>
                </button>

            </nav>
        );
    }
}

export default Header;

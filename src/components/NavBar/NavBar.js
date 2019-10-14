import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
import M from 'materialize-css';

class NavBar extends Component{

    componentDidMount(){
        M.AutoInit();
    }

    render(){
        return(
            <div className="nav nav-wrapper sidenav-trigger">
                <nav className="nav transparent">
                    <div className="nav transparent yllow">
                    <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">H</i></Link>
                    <ul id="" className="hide-on-med-and-down">    
                        <li className="nav"><Link to="/login">Login/SignUp</Link></li>
                        <li className="nav"><Link to="/">HOME</Link></li>
                        <li><Link to="/candidates">CANDIDATES</Link></li>
                        <li><Link to="/employerHome/positions">OPEN POSITIONS</Link></li>
                    </ul>

                    <ul className="sidenav" id="mobile-demo">
                        <li><Link to="/login">Login/SignUp</Link></li>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/candidates">CANDIDATES</Link></li>
                        <li><Link to="/employerHome/positions">OPEN POSITIONS</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
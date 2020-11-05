import React from 'react';
import './nav.css'
import {Link} from 'react-router-dom';
class Nav extends React.Component{
  render() {
    const linkStyle={
      color:"white"
    }
    return (
      <div>
        <nav>
          <h1> Logo</h1>
              <ul className="nav_links">
                <Link style={linkStyle} to="/home">
                <li>Home</li>
                </Link>
                <Link style={linkStyle} to="/profile">
                <li>Profile</li>
                </Link>
                <Link style={linkStyle} to="/login">
                <li>Login</li>
                </Link>
              </ul>
        </nav>
         
      </div>
        
    );
  }

  
}

export default Nav;

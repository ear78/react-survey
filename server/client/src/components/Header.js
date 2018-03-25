import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    
    fetchUser = () => {

    }

    render(){
        return (
                <nav>
                    <div className="nav-wrapper">
                      <Link to="/" className="brand-logo">Emaily</Link>
                      <ul className="right">
                        <li><Link to="login" onClick={this.fetchUser}>Login With Google</Link></li>
                      </ul>
                    </div>
                  </nav>
        )
    }
}

export default Header;

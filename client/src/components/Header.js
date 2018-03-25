import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component{

    renderContent() {
        console.log(this.props)
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                )
            default:
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                );
        }
    }

    render(){
        return (
                <nav>
                    <div className="nav-wrapper">
                      <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
                      <ul className="right">
                        {this.renderContent()}
                      </ul>
                    </div>
                  </nav>
        )
    }
}

function mapStateToProps(state){
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);
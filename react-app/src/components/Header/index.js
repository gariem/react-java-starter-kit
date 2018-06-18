import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import avatar from './avatar08_tn.png';

class Header extends React.Component {

    render() {
        return (
            <header id="main_header">
                <div className="container-fluid">
                    <div className="brand_section">
                        <Link to={'/'}>
                            <img alt="" src={logo}/>
                        </Link>
                    </div>
                    <div className="header_user_actions dropdown">
                        <div data-toggle="dropdown" className="dropdown-toggle user_dropdown" aria-expanded="false">
                            <div className="user_avatar">
                                <img src={avatar} alt="" title="Carrol Clark (carrol@example.com)" width="38" height="38" />
                            </div>
                            <span className="caret"></span>
                        </div>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="pages-user_profile.html">User Profile</a></li>
                            <li><a href="pages-user_profile2.html">User Profile 2</a></li>
                            <li><a href="login_page.html">Log Out</a></li>
                        </ul>
                    </div>
                    <div className="search_section hidden-sm hidden-xs">
                        <span className="twitter-typeahead">
                            <input type="text" className="form-control input-sm tt-hint" spellCheck="false" tabIndex="-1"/>

                        </span>
                        <button className="btn btn-link btn-sm" type="button">
                            <span className="icon_search"></span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
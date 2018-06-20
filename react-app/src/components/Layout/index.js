import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import Header from '../Header';
import './Layout.css';
import SideMenu from "../SideMenu";

const menuItems = [
    {
        id: 0,
        title: 'Home',
        icon: 'icon_house_alt first_level_icon',
        link: '/'
    },
    {
        id: 1,
        title: 'Maintenance',
        icon: 'icon_document_alt first_level_icon',
        submenu_title: 'Maintenance',
        submenu: [
            {title: 'Tasks', link: '/tasks'},
            {title: 'Transfers', link: '/transfer'},
            {title: 'Submenu 3', link: '#'},
        ]
    },
    {
        id: 2,
        title: 'Pages',
        icon: 'icon_folder-alt first_level_icon',
        badge: true,
        submenu_title: 'Pages',
        submenu: [
            {title: 'Login', link: '/login'},
            {title: 'Submenu 2', link: '#'},
            {title: 'Submenu 3', link: '#'},
            {title: 'Submenu 4', link: '#'},
        ]
    }];

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuExpanded: true
        }
        this.changeMenuSate = this.changeMenuSate.bind(this);
    }

    changeMenuSate() {
        this.setState({menuExpanded: !this.state.menuExpanded});
    }

    render() {
        let menu_expanded_class = this.state.menuExpanded ? "side_menu_expanded" : "side_menu_collapsed";
        return (
            <div className={`App side_menu_active ${menu_expanded_class}`}>
                <Header/>
                <SideMenu onToggle={this.changeMenuSate} expanded={this.state.menuExpanded}
                          items={menuItems}/>

                <div id="main_wrapper">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;
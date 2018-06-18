import React from 'react';
import './SideBar.css';
import SideMenuItem from "./SideMenuItem";

class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSideMenu = this.toggleSideMenu.bind(this);
    }

    toggleSideMenu() {
        this.props.onToggle();
    }

    render() {
        return (
            <nav id="main_menu">
                <div className="menu_wrapper">
                    <ul>
                        {this.props.items.map(item => (
                                <SideMenuItem key={item.id} item={item}/>
                            )
                        )}
                    </ul>
                </div>
                <div className="menu_toggle" onClick={this.toggleSideMenu}>
                    <span className="icon_menu_toggle">
                        {this.props.expanded ?
                            <i className="arrow_carrot-2left toggle_left"></i>
                            :
                            <i className="arrow_carrot-2right toggle_right"></i>
                        }
                    </span>
                </div>
            </nav>
        )
    }
}

export default SideMenu;
import React from 'react';

class SideMenuItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            subItems: false,
            active: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.item.submenu && this.props.item.submenu.length > 0) {
            this.setState({subItems: true});
        }
    }

    handleClick(){
        this.setState({active: !this.state.active});
    }

    render() {
        let item = this.props.item;
        let subMenuClass = this.state.subItems ? 'has_submenu' : '';
        let activeClass = this.state.active ? 'section_active' : '';
        let subMenuVisible = this.state.active ? {display: 'block'} : {};
        return (
            <li key={item.id} className={`first_level ${subMenuClass} ${activeClass}`}>
                <a onClick={this.handleClick} href={item.link}>
                    <span className={item.icon}></span>
                    <span className="menu-title">{item.title}</span>
                    {!item.submenu ? '' :
                        <ul style={subMenuVisible}>
                            <li className="submenu-title">{item.submenu_title}</li>
                            {item.submenu.map((subItem, i) => (
                                    <li key={i}><a className="submenu-link" href={subItem.link}>{subItem.title}</a></li>
                                )
                            )}
                        </ul>
                    }
                </a>
            </li>
        )
    }
}

export default SideMenuItem;
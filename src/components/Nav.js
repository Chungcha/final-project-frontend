import React from "react";
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default class Nav extends React.Component {

    state = { activeItem: "home" }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem} = this.state
        return(
            <nav>
                <Menu pointing>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/Home"
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/Profile"
                    />
                    <Menu.Item
                        name='history'
                        active={activeItem === 'history'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/History"
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        onClick={this.props.handleLogOut}
                    />
                </Menu.Menu>    
                </Menu>
            </nav>
        )
    }

}
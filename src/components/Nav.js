import React from "react";
import { Input, Menu, Segment } from "semantic-ui-react"
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
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='history'
                        active={activeItem === 'history'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='logout'
                        onClick={this.props.handleLogOut}
                    />
                </Menu.Menu>    
                </Menu>
                <Segment>
                    <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            </nav>
        )
    }

}
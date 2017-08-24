import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './Navbar.css'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='discovery'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Discovery
        </Menu.Item>

        <Menu.Item
          name='influence'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Influence
        </Menu.Item>
      </Menu>
    )
  }
}


import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted attached>
        <Menu inverted pointing secondary>
          <Menu.Item name='seeano' active={activeItem === 'seeano'} onClick={this.handleItemClick} />
          <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
          <Menu.Item name='documentation' active={activeItem === 'documentation'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}

export { Header }
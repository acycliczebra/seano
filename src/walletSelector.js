import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class WalletSelector extends Component {
  state = { visible: true }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        {/*<Button onClick={this.toggleVisibility}>Toggle Visibility</Button>*/}
        <Sidebar.Pushable as={Segment} style={{ minHeight: 'calc(100vh - 5em - 2px)' }}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <br style={{ height: '5em', margin: 0 }} />
            <Menu.Item name='wallet' style={{ height: '10vh', minHeight: '5em' }}>
              <i className='fas fa-wallet fa-2x'/>
              <br /><br />
              Wallet
            </Menu.Item>
            <Menu.Item name='explore' style={{ height: '10vh', minHeight: '5em' }}>
              <i className="far fa-eye fa-2x" />
              <br /><br />
              Explore
            </Menu.Item>
            <Menu.Item name='transfer' style={{ height: '10vh', minHeight: '5em' }}>
              <i className="fas fa-exchange-alt fa-2x" />
              <br /><br />
              Transfer
            </Menu.Item>
            <Menu.Item name='blockchain' style={{ height: '10vh', marginTop: 'calc(40vh - 7em - 4px)', minHeight: '5em' }}>
              <i className="fas fa-cubes fa-2x" />
              <br /><br />
              Settings
            </Menu.Item>
            <Menu.Item name='settings' style={{ height: '10vh', minHeight: '5em' }}>
              <i className="fas fa-cog fa-2x" />
              <br /><br />
              Settings
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export { WalletSelector }

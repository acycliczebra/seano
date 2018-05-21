import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'


class DefaultPlane extends Component {
  render() {
    return (
      <div>settings</div>
    )
  }
}

class Selector extends Component {
  state = {
    visible: true,
    selected: 'user'
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  changeSelected(selection) {
    this.setState({
      selected: selection
    })
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        {/*<Button onClick={this.toggleVisibility}>Toggle Visibility</Button>*/}
        <Sidebar.Pushable as={Segment} style={{ minHeight: 'calc(100vh - 5em - 2px)' }}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <br style={{ height: '5em', margin: 0 }} />
            <Menu.Item name='user' style={{ height: '10vh', minHeight: '5em' }}
                onClick={e => {this.changeSelected('user')}}>
              <i className='fas fa-user fa-2x'/>
              <br /><br />
              Me
            </Menu.Item>
            <Menu.Item name='forum' style={{ height: '10vh', minHeight: '5em' }}
                onClick={e => {this.changeSelected('forum')}}>
              <i className="far fa-newspaper fa-2x" />
              <br /><br />
              Forum
            </Menu.Item>
            <Menu.Item name='message' style={{ height: '10vh', minHeight: '5em' }}
                onClick={e => {this.changeSelected('message')}}>
              <i className="fas fa-envelope fa-2x" />
              <br /><br />
              Message
            </Menu.Item>
            <Menu.Item name='settings' style={{ height: '10vh', minHeight: '5em' }}
                onClick={e => {this.changeSelected('settings')}}>
              <i className="fas fa-cog fa-2x" />
              <br /><br />
              Settings
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            {this.props.plane[this.state.selected] || <DefaultPlane /> }
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export { Selector }

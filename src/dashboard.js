import React from 'react'
import { Container, Header, Button, Message } from 'semantic-ui-react'

import { Selector } from './selector'

import { createNewAddress, loadAddress } from './blockchain/address'


class User extends React.Component {
  state = {
    privateKey: null,
    publicKey: null,
  }

  createNewKey() {

    let address = createNewAddress()
    address.store()

    this.setState({
      privateKey: address.getPrivateKey(),
      publicKey: address.getPublicKey(),
    })
  }

  createLinebreaks(value) {
    return <div dangerouslySetInnerHTML={
      {__html: value.replace(/(.{80})/g, '<xmp>$1</xmp>')}
    } />
  }

  componentDidMount() {
    let address = loadAddress()
    if (!address){
      return
    }

    this.setState({
      privateKey: address.getPrivateKey(),
      publicKey: address.getPublicKey(),
    })
  }

  render() {
    let publicKey = this.state.publicKey || 'null'
    let privateKey = this.state.privateKey || 'null'

    return (
      <Container style={{ margin: '1em' }}>dd
        <Header as='h2'>User</Header>

        <Button onClick={e => this.createNewKey()}> Create Key </Button>
        <br />

        <Message info compact>
          <Message.Header>Public Key</Message.Header>
          { this.createLinebreaks(publicKey) }
        </Message>
        <br />

        <Message warning compact>
          <Message.Header>Private Key</Message.Header>
          { this.createLinebreaks(privateKey) }
        </Message>
      </Container>
    )
  }
}

const Forum = () => (
  <Container style={{ margin: '1em' }}>
    <Header as='h2'>Forum</Header>
  </Container>
)

const PrivateMessage = () => (
  <Container style={{ margin: '1em' }}>
    <Header as='h2'>Message</Header>
  </Container>
)

const Dashboard = () => (
  <main >
    <Selector plane={{
      user: <User />,
      forum: <Forum />,
      message: <PrivateMessage />,
      setting: null,
    }}
    />
  </main>
)

export { Dashboard }
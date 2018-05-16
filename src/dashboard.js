import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import { WalletSelector } from './walletSelector'

const Dashboard = () => (
  <main >
    <WalletSelector>
      <Container style={{ margin: '1em' }}>
        <Header as='h2'>Header</Header>
      </Container>
    </WalletSelector>
  </main>
)

export { Dashboard }
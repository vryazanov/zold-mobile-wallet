import React, { PureComponent } from 'react'
import Wallet from 'zold-node-sdk/lib/Wallet'

import Spinner from './Spinner'


class Loading extends PureComponent {
  componentDidMount() {
    const { navigation, authToken } = this.props

    if (authToken) {
      const wallet = new Wallet(authToken)
      console.log('Start pulling')
      wallet.pull()
        .then(jobId => wallet.job(jobId, { wait: true }))
        .then(() => navigation.navigate('Home', { wallet }))
    } else {
      navigation.navigate('PhoneSignIn')
    }
  }

  render() {
    return <Spinner />
  }
}

export default Loading
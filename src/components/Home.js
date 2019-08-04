import React, { PureComponent } from 'react'
import { StyleSheet, Button, View } from 'react-native'

import Balance from '../containers/Balance'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.menuComponents = { balance: Balance }
    this.wallet = this.props.navigation.getParam('wallet')
  }

  state = {
    selectedMenu: 'balance',
  }

  render() {
    const Component = this.menuComponents[this.state.selectedMenu]

    return (
      <View style={styles.header}>
        <View style={styles.navigation}>
          <Button title="Balance" onPress={() => this.setState({ selectedMenu: 'balance' })} />
          <Button title="Transactions" />
          <Button title="Pay" />
        </View>
        <View style={styles.content}>
          <Component wallet={this.wallet} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {

  }
})

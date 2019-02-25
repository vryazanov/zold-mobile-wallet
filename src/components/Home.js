import React, { PureComponent } from 'react'
import { StyleSheet, Button, View } from 'react-native'

import Balance from './Balance'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.menuComponents = {
      'balance': Balance,
    }
  }

  state = {
    selectedMenu: 'balance',
  }

  render() {
    const Component = this.menuComponents[this.state.selectedMenu]

    return (
      <View style={styles.header}>
        <Button title="Balance" onPress={() => this.setState({selectedMenu: 'balance'})} />
        <Button title="Transactions" />
        <Button title="Pay" />
        <Button title="Buy / Sell" />
        <Component />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

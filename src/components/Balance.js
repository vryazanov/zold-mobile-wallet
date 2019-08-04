import React, { PureComponent } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'


export default class Balance extends PureComponent {
  state = {
    loaded: false,
  }
  // @todo #15:30min continue implementation of Balance, we should pull wallet after login,
  //  and fetching balance untill it's not fetched.
  componentDidMount() {
    const { wallet } = this.props
    console.log('Balance inside wallet: ', wallet)
    wallet.balance().then(balance => console.log('Balance: ', balance))
  }

  render() {
    return (
      <View style={styles.header}>
        <Text>Balance: </Text>
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

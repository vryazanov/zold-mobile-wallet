import React, { PureComponent } from 'react'
import { StyleSheet, Button, View } from 'react-native'


export default class Home extends PureComponent {
  render() {
    return (
      <View style={styles.header}>
        <Button title="Transactions" />
        <Button title="Pay" />
        <Button title="Buy / Sell" />
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

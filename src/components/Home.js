import React, { PureComponent } from 'react'
import { StyleSheet, Text, Button, View, Image } from 'react-native'

import mainStyles from '../styles'
import Logo from '../ui/Logo'

export default class Home extends PureComponent {
    render() {
        return (
            <View style={mainStyles.container}>
                <Logo />
                <View style={styles.header}>
                    <Button title="Transactions" />
                    <Button title="Pay" />
                    <Button title="Buy / Sell" />
                </View>
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

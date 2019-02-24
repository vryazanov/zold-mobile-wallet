import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import MobileToken from 'zold-node-sdk/lib/MobileToken'

import Spinner from './Spinner'
import mainStyles from '../styles'
import Logo from '../ui/Logo'


export default class SMSConfirm extends PureComponent {
    state = {
        showSpinner: true,
    }

    constructor(props) {
        super(props)
        const { navigation } = props

        this.mobileToken = new MobileToken(navigation.getParam('phone').slice(1))
        this.mobileToken.send().then(() => this.setState({ showSpinner: false }))
    }

    onFullFilled = (code) => {
        this.mobileToken.token(code)
            .then(token => {
                console.log('Token: ', token)
            })
            .catch(() => {
                this.codeInput.clear()
            })
    }

    render() {
        const { showSpinner } = this.state
        if (showSpinner) {
            return <Spinner />
        }
        return (
            <View style={mainStyles.container}>
                <Logo />
                <Text>Enter code:</Text>
                <CodeInput
                    ref={node => {
                        this.codeInput = node
                    }}
                    space={5}
                    size={30}
                    keyboardType="numeric"
                    codeLength={4}
                    activeColor="#373737"
                    inactiveColor="#999"
                    autoFocus={false}
                    ignoreCase={true}
                    inputPosition='center'
                    onFulfill={this.onFullFilled}
                />
            </View>
        )
    }
}

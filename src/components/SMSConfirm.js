import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import MobileToken from 'zold-node-sdk/lib/MobileToken'

import Spinner from './Spinner'


export default class SMSConfirm extends PureComponent {
    static propTypes = {
      setToken: PropTypes.func.isRequired,
      navigation: PropTypes.shape({}),
    }

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
          return this.props.setToken(token)
        })
        .then(() => this.props.navigation.navigate('Loading'))
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
        <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

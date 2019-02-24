import React, { PureComponent } from 'react'
import { StyleSheet, Text, Button, View, Image } from 'react-native'
import PhoneInput from 'react-native-phone-input'


export default class SignIn extends PureComponent {
    state = {
        phone: null,
        showGetCodeButton: false,
    }

    onGetCodePressed = () => this.props.navigation.navigate('SMSConfirm', { phone: this.phone.getValue() })

    onPhoneChanged = phone => {
        const { showGetCodeButton } = this.state
        if (this.phone.isValidNumber(phone) !== showGetCodeButton) {
            this.setState({ showGetCodeButton: !showGetCodeButton })
        }
    }

    render() {
        const { showGetCodeButton } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.labelContainer}>
                    <Text>Enter your phone number:</Text>
                </View>
                <View style={styles.inputContainer}>
                    <PhoneInput
                        ref={ref => {
                            this.phone = ref;
                        }}
                        onChangePhoneNumber={this.onPhoneChanged}
                    />
                </View>
                {showGetCodeButton &&
                    <View style={styles.buttonContainer}>
                        <Button title="Get code" onPress={this.onGetCodePressed} />
                    </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  inputContainer: {
    width: 150,
    marginTop: 25,
  },
  labelContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 50,
  }
})

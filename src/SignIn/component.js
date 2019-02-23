import React, { PureComponent } from 'react'
import { StyleSheet, Text, Button, View, Image } from 'react-native'
import PhoneInput from 'react-native-phone-input'


export default class SignIn extends PureComponent {
  onGetCodePressed = () => {}

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/zold.png')} style={styles.logo} />
        <View style={styles.labelContainer}>
          <Text>Enter your phone number:</Text>
        </View>
        <View style={styles.inputContainer}>
          <PhoneInput />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Get code" onPress={this.onGetCodePressed} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 50,
    height: 50,
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

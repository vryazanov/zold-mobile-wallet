import React from 'react'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import PhoneInput from 'react-native-phone-input'


/*
@todo: Test pdd hooks
*/

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/zold.png')} style={styles.logo} />
        <View style={styles.labelContainer}>
          <Text>Enter your phone number:</Text>
        </View>
        <View style={styles.inputContainer}>
          <PhoneInput />
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
});

import React, { PureComponent} from 'react'
import { View } from 'react-native'

import Logo from './Logo'
import styles from '../styles'


export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.header}>
        <Logo />
      </View>
    )
  }
}

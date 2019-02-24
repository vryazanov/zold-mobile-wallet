import React from 'react'
import { Image } from 'react-native'

import mainStyles from '../styles'

const Logo = () => (
    <Image
        source={require('../../assets/zold.png')}
        style={mainStyles.logo}
    />
)

export default Logo

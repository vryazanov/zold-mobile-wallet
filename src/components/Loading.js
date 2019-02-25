import PropTypes from 'prop-types'

const Loading = ({ navigation, authToken }) => {
    if (authToken) {
      navigation.navigate('Home')
    } else {
      navigation.navigate('PhoneSignIn')
    }
    return null
}

Loading.propTypes = {
  navigation: PropTypes.func.isRequired,
  authToken: PropTypes.string,
}

export default Loading
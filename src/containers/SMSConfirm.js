import { connect } from 'react-redux'

import { setToken } from '../actions'
import SMSConfirm from '../components/SMSConfirm'

const mapDispatchToProps = {
  setToken
}

export default connect(null, mapDispatchToProps)(SMSConfirm)
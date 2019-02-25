import { connect } from 'react-redux'

import { getAuthToken } from '../selectors'
import Loading from '../components/Loading'

const mapStateToProps = state => ({
    authToken: getAuthToken(state),
})

export default connect(mapStateToProps, null)(Loading)
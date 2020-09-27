import { connect } from 'react-redux'
import SplashPage from './splash_page'

const mapStateToProps = state => {
    return {
        userID: state.session.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)
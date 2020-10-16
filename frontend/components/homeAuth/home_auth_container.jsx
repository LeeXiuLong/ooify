import HomeAuth from './home_auth';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeAuth);
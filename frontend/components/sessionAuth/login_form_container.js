import { connect } from 'react-redux';
import SessionForm from './login_form';
import { login } from '../../actions/session_actions';


const mapStateToProps = state => {
    return {
        errors: state.errors.session,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
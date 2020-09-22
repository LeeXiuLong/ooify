import { connect } from 'react-redux';
import SessionForm from './login_form';
import { signup } from '../../actions/session_actions';



const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: "SIGN UP",
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
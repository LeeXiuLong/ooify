import { connect } from 'react-redux';
import Home from './home';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal:() => dispatch(openModal("makePlaylist"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
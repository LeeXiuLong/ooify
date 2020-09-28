import { connect } from 'react-redux';
import Home from './home';
import {openModal} from '../../actions/modal_actions';
import { } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    let currentId = ownProps.match.params.userId;
    return {
        playlists: state.entities.users[currentId].playlists
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal:() => dispatch(openModal("makePlaylist"))
        // getUser:() => dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import { connect } from 'react-redux';
import Home from './home';
import {openModal} from '../../actions/modal_actions';
import { } from '../../actions/session_actions';
import {getUserPlaylists} from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
    
    return {
        playlists: Object.values(state.entities.playlists),
        currentUserId: state.session.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    let openModalProps = {
        type: "makePlaylist",
        song: null,
    }
    return {
        openModal: () => dispatch(openModal(openModalProps)),
        getPlaylists: userId => dispatch(getUserPlaylists(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
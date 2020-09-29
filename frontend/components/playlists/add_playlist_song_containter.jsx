import { connect } from 'react-redux';
import AddPlaylistSong from './add_playlist_song';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    let currentUser = state.entities.users[state.session.id]
    
    return {
        playlists: s
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        newPlaylistModal: () => dispatch(openModal("makePlaylist")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaylistSong);
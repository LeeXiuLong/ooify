import { connect } from 'react-redux';
import AddPlaylistSong from './add_playlist_song';
import { closeModal, openModal } from '../../actions/modal_actions';
import { addSongToPlaylist } from '../../actions/playlist_songs_actions';
import { getUserPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = state => {
    return {
        playlists: Object.values(state.entities.playlists),
        song: state.ui.modal.song,
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: openModalProps => dispatch(openModal(openModalProps)),
        addSongToPlaylist: playlistSong => dispatch(addSongToPlaylist(playlistSong)),
        getUserPlaylists: (userId) => dispatch(getUserPlaylists(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaylistSong);
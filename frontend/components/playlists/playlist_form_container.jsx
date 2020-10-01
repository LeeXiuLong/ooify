import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { makePlaylist, makePlaylistWithSong } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.id,
        song: state.ui.modal.song
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        makePlaylist: (playlist) => dispatch(makePlaylist(playlist)),
        makePlaylistWithSong: (playlist, song) => dispatch(makePlaylistWithSong(playlist, song)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm)
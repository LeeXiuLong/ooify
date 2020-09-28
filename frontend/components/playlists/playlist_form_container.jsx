import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { makePlaylist } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        makePlaylist: (playlist) => dispatch(makePlaylist(playlist)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm)
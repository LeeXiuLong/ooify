import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { getPlaylist, clearPlaylists } from '../../actions/playlist_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId],
        songs: state.entities.songs,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPlaylist: () => dispatch(getPlaylist(ownProps.match.params.playlistId)),
        clearPlaylists: () => dispatch(clearPlaylists()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
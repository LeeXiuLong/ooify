import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { getPlaylist } from '../../actions/playlist_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPlaylist: () => dispatch(getPlaylist(ownProps.match.params.playlistId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { getPlaylist, clearPlaylists, deletePlaylist } from '../../actions/playlist_actions';
import { openModal } from '../../actions/modal_actions';
import { removeSongFromPlaylist } from '../../actions/playlist_songs_actions';
import { receiveSelectedSong } from '../../actions/song_actions';


const mapStateToProps = (state, ownProps) => {
    let playlist = state.entities.playlists[ownProps.match.params.playlistId];
    let playlistSongs
    let playlistSongIds = [];
    let songs;
    if(playlist){
        playlist = playlist.playlist;
        playlistSongs = Object.values(state.entities.playlistSongs).filter(playlistSong => {
            return playlist.id === playlistSong.playlist_id
        })
        playlistSongs.forEach(playlistSong => {
            playlistSongIds.push(playlistSong.song_id)
        })
        songs = Object.values(state.entities.songs)
        // .filter(song => {
        //     return playlistSongIds.includes(song.id)
        // })
    }

    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId],
        songs,
        albums: state.entities.albums,
        playlistId: ownProps.match.params.playlistId,
        artists: state.entities.artists,
        playlistSongs: state.entities.playlistSongs,
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPlaylist: playlistId => dispatch(getPlaylist(playlistId)),
        clearPlaylists: () => dispatch(clearPlaylists()),
        openModal: openModalProps => dispatch(openModal(openModalProps)),
        removeSongFromPlaylist: songPlaylistId => dispatch(removeSongFromPlaylist(songPlaylistId)),
        deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
        selectSong: song => dispatch(receiveSelectedSong(song)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getAlbumTracks, clearSongs } from '../../actions/song_actions';
import { getAlbum } from '../../actions/album_actions';
import { getArtist } from '../../actions/artist_actions';
import { openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let songs = Object.values(state.entities.songs);
    let album_songs = songs.filter(song => {
        return song.album_id === parseInt(ownProps.match.params.albumId)
    })

    return {
        album: state.entities.albums[ownProps.match.params.albumId],
        songs: album_songs,
        artist: album_songs[0] ? state.entities.artists[album_songs[0].artist_id] : null
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        getSongs: () => dispatch(getAlbumTracks(ownProps.match.params.albumId)),
        getAlbum: () => dispatch(getAlbum(ownProps.match.params.albumId)),
        getArtist: (artistId) => dispatch(getArtist(artistId)),
        clearSongs: () => dispatch(clearSongs()),
        openModal: () => dispatch(openModal("addToPlaylist")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow)

//user playlists
// UserPlaylists{
// 299, 1
// 123, 1
//}
// UserPlaylists where user.id === ownProps.match.params.userId
//{
// 299
// 255
// 123    
//}
//localhost:3000/user/1/playlists
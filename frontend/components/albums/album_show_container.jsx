import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getAlbumTracks, clearSongs } from '../../actions/song_actions';
import { getAlbum, clearAlbums } from '../../actions/album_actions';
import { getArtist } from '../../actions/artist_actions';
import { openModal, closeModal} from '../../actions/modal_actions';
import { getUserPlaylists } from '../../actions/playlist_actions';
import { clearPlaylists } from '../../actions/playlist_actions';
import { receiveSelectedSong } from '../../actions/song_actions'


const mapStateToProps = (state, ownProps) => {
    let songs = Object.values(state.entities.songs);
    let album = state.entities.albums[ownProps.match.params.albumId];
    let artist = state.entities.albums[ownProps.match.params.albumId] ? state.entities.albums[ownProps.match.params.albumId].artist : null

    return {
        album,
        songs,
        artist,
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        getSongs: () => dispatch(getAlbumTracks(ownProps.match.params.albumId)),
        getAlbum: () => dispatch(getAlbum(ownProps.match.params.albumId)),
        getArtist: artistId => dispatch(getArtist(artistId)),
        clearSongs: () => dispatch(clearSongs()),
        openModal: openModalProps => dispatch(openModal(openModalProps)),
        getUserPlaylists: userId => dispatch(getUserPlaylists(userId)),
        clearPlaylists: () => dispatch(clearPlaylists()),
        clearAlbums: () => dispatch(clearAlbums()),
        selectSong: song => dispatch(receiveSelectedSong(song)),
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
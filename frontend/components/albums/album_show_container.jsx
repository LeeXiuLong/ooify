import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getAlbumTracks, clearSongs } from '../../actions/song_actions';
import { getAlbum } from '../../actions/album_actions';
import { getArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
    let songs = Object.values(state.entities.songs);


    return {
        album: state.entities.albums[ownProps.match.params.albumId],
        songs: songs,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        getSongs: () => dispatch(getAlbumTracks(ownProps.match.params.albumId)),
        getAlbum: () => dispatch(getAlbum(ownProps.match.params.albumId)),
        getArtist: (artistId) => dispatch(getArtist(artistId)),
        clearSongs: () => dispatch(clearSongs())
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
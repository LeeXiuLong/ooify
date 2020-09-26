import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getAlbumTracks } from '../../actions/song_actions';
import { getAlbum } from '../../actions/album_actions';
import { getArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
    let songs = Object.values(state.entities.songs);
    let album_songs = songs.map(song => {
        if(song.album_id === parseInt(ownProps.match.params.albumId)){
            return song;
        }else{
            return null
        }
    })

    return {
        album: state.entities.albums[ownProps.match.params.albumId],
        songs: album_songs,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        getSongs: () => dispatch(getAlbumTracks(ownProps.match.params.albumId)),
        getAlbum: () => dispatch(getAlbum(ownProps.match.params.albumId)),
        getArtist: (artistId) => dispatch(getArtist(artistId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow)
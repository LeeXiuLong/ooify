import { connect } from 'react-redux' 
import { getArtist } from '../../actions/artist_actions'
import { getArtistDisco } from '../../actions/album_actions'
import ArtistShow from './artist_show';

const mapStateToProps = (state, ownProps) => {
    let albums = Object.values(state.entities.albums)
    

    let artist_albums = albums.map(album=>{
        if(album.artist_id === parseInt(ownProps.match.params.artistId)){
            return album;
        }else{
            return null
        }
    })

    
    return{
        artist: state.entities.artists[ownProps.match.params.artistId],
        albums: artist_albums,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        getArtist: () => dispatch(getArtist(ownProps.match.params.artistId)),
        getArtistDisco: () => dispatch(getArtistDisco(ownProps.match.params.artistId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
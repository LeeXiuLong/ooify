import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { getAlbums } from '../../actions/album_actions'

const mapStateToProps = state => {
    return {
        albums: Object.values(state.entities.albums),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAlbums: () => dispatch(getAlbums()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
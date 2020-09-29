import {RECEIVE_ALBUM, RECEIVE_DISCO} from '../actions/album_actions'
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions'

const AlbumsReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ALBUM:
            newState = Object.assign({}, state);
            newState[action.album.id] = action.album;
            return newState;
        case RECEIVE_DISCO:
            newState = Object.assign({}, state);
            action.albums.forEach(album => {
                newState[album.id] = album
            })
            return newState;
        case RECEIVE_PLAYLIST:
            newState = action.object.albums;
            return newState;
        default:
            return state;
    }
}

export default AlbumsReducer;
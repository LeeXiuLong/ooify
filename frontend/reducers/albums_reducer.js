import {RECEIVE_ALBUM, RECEIVE_DISCO, CLEAR_ALBUMS, RECEIVE_ALBUMS} from '../actions/album_actions'
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
            newState = action.albums
            return newState;
        case RECEIVE_PLAYLIST:
            if(action.object.albums){
                newState = Object.assign({}, state);
                let keys = Object.keys(action.object.albums);
                keys.forEach(key => {
                    newState[key] = action.object.albums[key];
                })
                return newState;
            }else{
                return {};
            }
        case RECEIVE_ALBUMS:
            return action.albums;
        case CLEAR_ALBUMS:
            return {};
        default:
            return state;
    }
}

export default AlbumsReducer;
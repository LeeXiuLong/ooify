import { RECEIVE_ALBUM_TRACKS, CLEAR_SONGS } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const SongsReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ALBUM_TRACKS:
            return action.songs;
        case RECEIVE_PLAYLIST:
            if(action.object.songs){
                newState = action.object.songs
                return newState;
            }else{
                return {};
            }
        case CLEAR_SONGS:
            return {};
        default:
            return state;
    }
}

export default SongsReducer
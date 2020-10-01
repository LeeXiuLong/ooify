import { RECEIVE_ALBUM_TRACKS, CLEAR_SONGS } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const SongsReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ALBUM_TRACKS:
            newState = Object.assign({}, state);
            let songObjects = Object.values(action.songs);
            songObjects.forEach(song=>{
                newState[song.id] = song
            })
            return newState;
        case RECEIVE_PLAYLIST:
            if(action.object.songs){
                newState = Object.assign({}, state);
                let keys = Object.keys(action.object.songs)
                keys.forEach(key => {
                    newState[key] = action.object.songs[key]
                })
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
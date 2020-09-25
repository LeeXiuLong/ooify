import {RECEIVE_ALBUM_TRACKS} from '../actions/song_actions';

const SongsReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ALBUM_TRACKS:
            newState = Object.assign({}, state);
            action.songs.forEach(song=>{
                newState[song.id] = song
            })
            return newState;
        default:
            return state;
    }
}

export default SongsReducer
import { RECEIVE_SELECTED_SONG } from '../actions/song_actions';

const PlaybarReducer = (state={currentlyPlaying: false, selectedSong:null}, action) => {
    Object.freeze(state);

    let newState;

    switch (action.type) {
        case RECEIVE_SELECTED_SONG:
            newState = Object.assign({}, state);
            newState.currentlyPlaying = true;
            newState.selectedSong = action.song
            return newState;
        default:
            return state;
    }
}

export default PlaybarReducer;
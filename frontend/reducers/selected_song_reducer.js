import { RECEIVE_SELECTED_SONG } from '../actions/song_actions';

state= {
    currentlyPlaying: false,
    selectedSong: null
}

const SelectedSongReducer = (state=state, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SELECTED_SONG:
            newState = Object.assign({}, state);
            newState.currentlyPlaying = true;
            newState.selectedSong = action.song
        default:
            return state;
    }
}

export default SelectedSongReducer;
import {RECEIVE_PLAYLIST} from '../actions/playlist_actions'

const PlaylistsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;

    switch (action.type) {
        case RECEIVE_PLAYLIST:
            newState = Object.assign({}, state);
            newState[action.playlist.id] = action.playlist;
            return newState;
        default:
            return state;
    }
}

export default PlaylistsReducer;
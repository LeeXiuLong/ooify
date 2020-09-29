import { RECEIVE_PLAYLIST, CLEAR_PLAYLISTS } from '../actions/playlist_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const PlaylistsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;

    switch (action.type) {
        case RECEIVE_PLAYLIST:
            newState = Object.assign({}, state);
            newState[action.playlist.id] = action.playlist;
            return newState;
        case CLEAR_PLAYLISTS:
            newState = {};
            return newState;
        case RECEIVE_CURRENT_USER:
            return action.currentUser.playlists;
        default:
            return state;
    }
}

export default PlaylistsReducer;
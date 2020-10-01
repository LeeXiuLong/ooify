import { RECEIVE_PLAYLIST, CLEAR_PLAYLISTS, RECEIVE_PLAYLISTS } from '../actions/playlist_actions'

const PlaylistsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;

    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
            newState = Object.assign({}, state);
            newState[action.object.playlist.id] = action.object
            return newState;
        case CLEAR_PLAYLISTS:
            newState = {};
            return newState;
        default:
            return state;
    }
}

export default PlaylistsReducer;
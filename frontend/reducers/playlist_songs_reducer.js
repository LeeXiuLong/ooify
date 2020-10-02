import  { RECEIVE_PLAYLIST } from '../actions/playlist_actions'

const PlaylistSongReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_PLAYLIST:
            newState = Object.assign({}, state);
            if(action.object.playlist_songs){
                return action.object.playlist_songs;
            }else{
                return {};
            }
            
        default:
            return state;
    }
}

export default PlaylistSongReducer;
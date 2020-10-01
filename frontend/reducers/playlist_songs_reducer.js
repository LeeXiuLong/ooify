import  { RECEIVE_PLAYLIST } from '../actions/playlist_actions'

const PlaylistSongReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_PLAYLIST:
            newState = Object.assign({}, state);
            if(action.object.playlist_songs){
                let keys = Object.keys(action.object.playlist_songs);
                keys.forEach(key => {
                    newState[key] = action.object.playlist_songs[key];
                })
                return newState;
            }else{
                return {};
            }
            
        default:
            return state;
    }
}

export default PlaylistSongReducer;
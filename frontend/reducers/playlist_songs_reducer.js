import  { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { CLEAR_PLAYLIST_SONGS } from '../actions/playlist_songs_actions';

const PlaylistSongReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_PLAYLIST:
            newState = Object.assign({}, state);
            if(action.object.playlist_songs){
                return action.object.playlist_songs;
                // let playlist_id = action.object.playlist.id
                // let newKeys = Object.keys(action.object.playlist_songs);
                // Object.values(action.object.playlist_songs).forEach(value=> {
                //     if(value.playlist_id === playlist_id){
                //         delete newState[value.id]
                //     }
                // })
                // newKeys.forEach(key => {
                //     newState[key] = action.object.playlist_songs[key];
                // })
                // return newState;
            }else{
                return {};
            }
        case CLEAR_PLAYLIST_SONGS:
            return {};
        default:
            return state;
    }
}

export default PlaylistSongReducer;
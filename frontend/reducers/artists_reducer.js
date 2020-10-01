import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions'

const ArtistsReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ARTIST:
            newState= Object.assign({}, state);
            newState[action.artist.id] = action.artist
            return newState;
        case RECEIVE_PLAYLIST:
            if(!action.object.artists){
                return {};
            }else{
                newState = Object.assign({}, state);
                let keys = Object.keys(action.object.artists);
                keys.forEach(key => {
                    newState[key] = action.object.artists[key];
                })
                return newState;
            }
        default:
            return state;
    }
}

export default ArtistsReducer;
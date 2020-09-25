import { RECEIVE_ARTIST } from '../actions/artist_actions';

const ArtistsReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ARTIST:
            newState= Object.assign({}, state);
            newState[action.artist.id] = action.artist
            return newState;
        default:
            return state;
    }
}

export default ArtistsReducer;
import * as mainAPIUtil from '../util/main_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const receiveArtist = artist => {
    return{
        type: RECEIVE_ARTIST,
        artist
    }
}

export const getArtist = artist => {
    return dispatch => {
        return mainAPIUtil.getArtist(artist)
            .then(artist => dispatch(receiveArtist(artist)))
    }
}


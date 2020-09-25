import * as mainAPIUtil from '../util/main_api_util'
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_DISCO = 'RECEIVE_DISCO'

export const receiveAlbum = album => {
    return {
        type: RECEIVE_ALBUM,
        album
    }
}

export const receiveDisco = albums => {
    return {
        type: RECEIVE_DISCO,
        albums
    }
}

export const getAlbum = album => {
    return dispatch =>{
        return mainAPIUtil.getAlbum(album)
            .then(album => dispatch(receiveAlbum(album)));
    }
}

export const getArtistDisco = artist => {
    return dispatch => {
        return mainAPIUtil.getArtistDisco(artist)
            .then(albums => dispatch(receiveDisco(albums)))
    }
}
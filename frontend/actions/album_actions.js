import * as mainAPIUtil from '../util/main_api_util'
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_DISCO = 'RECEIVE_DISCO';
export const CLEAR_ALBUMS = "CLEAR_ALBUMS";

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

export const clearAlbums = () => {
    return{
        type: CLEAR_ALBUMS,
    }
}

export const getAlbum = albumId => {
    return dispatch =>{
        return mainAPIUtil.getAlbum(albumId)
            .then(album => dispatch(receiveAlbum(album)));
    }
}

export const getArtistDisco = artistId => {
    return dispatch => {
        return mainAPIUtil.getArtistDisco(artistId)
            .then(albums => dispatch(receiveDisco(albums)))
    }
}


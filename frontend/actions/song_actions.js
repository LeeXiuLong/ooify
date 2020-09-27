export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_ALBUM_TRACKS = "RECEIVE_SONGS";
export const CLEAR_SONGS = "CLEAR_SONGS"
import * as mainAPIUtil from '../util/main_api_util'

export const receiveSong = song => {
    return {
        type: RECEIVE_SONG,
        song
    }
}

export const receiveAlbumTracks = songs => {
    return {
        type: RECEIVE_ALBUM_TRACKS,
        songs
    }
}

export const getAlbumTracks = albumId => {
    return dispatch => {
        return mainAPIUtil.getAlbumTracks(albumId)
            .then(songs => dispatch(receiveAlbumTracks(songs)))
    }
}

export const clearSongs = () => {
    return {
        type: CLEAR_SONGS,
    }
}


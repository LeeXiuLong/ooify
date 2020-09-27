export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
import * as mainAPIUtil from '../util/main_api_util'

export const receivePlaylists = playlists => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists
    }
}

export const receivePlaylist = playlist => {
    return{
        type: RECEIVE_PLAYLIST,
        playlist
    }
}

export const getPlaylist = playlistId => {
    return dispatch => {
        return mainAPIUtil.getPlaylist(playlistId)
            .then(playlist => dispatch(receivePlaylist(playlist)))
    }
}
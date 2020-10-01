export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const CLEAR_PLAYLISTS = "CLEAR_PLAYLISTS";
import * as mainAPIUtil from '../util/main_api_util'
import { receiveCurrentUser } from './session_actions';

export const receivePlaylists = playlists => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists
    }
}

export const receivePlaylist = object => {
    return{
        type: RECEIVE_PLAYLIST,
        object
    }
}

export const clearPlaylists = () => {
    return{
        type: CLEAR_PLAYLISTS,
    }
}

export const deletePlaylist = playlistId => {
    return dispatch => {
        return mainAPIUtil.deletePlaylist(playlistId)
            .then(playlists => dispatch(receivePlaylists(playlists)))
    }
}

export const getPlaylist = playlistId => {
    return dispatch => {
        return mainAPIUtil.getPlaylist(playlistId)
            .then(playlist => dispatch(receivePlaylist(playlist)))
    }
}

export const makePlaylist = playlist => {
    return dispatch => {
        return mainAPIUtil.makePlaylist(playlist)
            .then(playlist => dispatch(receivePlaylist(playlist)))
    }
}

export const getUserPlaylists = userId => {
    return dispatch => {
        return mainAPIUtil.getUserPlaylists(userId)
            .then(playlists => dispatch(receivePlaylists(playlists)))
    }
}

export const makePlaylistWithSong = (playlist, song) => {
    return dispatch => {
        return mainAPIUtil.makePlaylist(playlist)
            .then(object => {
                let playlistSong ={
                    song_id: song.id,
                    playlist_id: object.playlist.id
                }
                debugger
                return mainAPIUtil.addSongToPlaylist(playlistSong)
                    .then(playlist => dispatch(receivePlaylist(playlist)))
            })
    }
}
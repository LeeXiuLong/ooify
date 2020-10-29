import * as mainAPIUtil from '../util/main_api_util';
import { receivePlaylist } from './playlist_actions';

export const CLEAR_PLAYLIST_SONGS = "CLEAR_PLAYLIST_SONGS";

export const clearPlaylistSongs = () => {
    return {
        type: CLEAR_PLAYLIST_SONGS,
    }
}



export const addSongToPlaylist = playlistSong => {
    return dispatch => {
        return mainAPIUtil.addSongToPlaylist(playlistSong);
    }   
}

export const removeSongFromPlaylist = playlistSongId => {
    return dispatch => {
        return mainAPIUtil.removeSongFromPlaylist(playlistSongId)
            .then(playlist => dispatch(receivePlaylist(playlist)))
    }
}

// export const removeSongFromPlaylist = (playlistId, songId) => {
//     mainAPIUtil.
// }
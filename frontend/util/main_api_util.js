export const getArtist = artistId => {
    return $.ajax({
        method: "GET",
        url: `/api/artists/${artistId}`
    })
}

export const getAlbum = albumId => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/${albumId}`
    })
}

export const getArtistDisco = artistId => {
    return $.ajax({
        method: "GET",
        url: `/api/artists/${artistId}/albums`
    })
}

export const getAlbumTracks = albumId => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/${albumId}/songs`
    })
}

export const makePlaylist = playlist => {
    return $.ajax({
        method: "POST",
        url: "/api/playlists",
        data: { playlist }
    })
}

export const getPlaylist = playlistId => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/${playlistId}`
    })
}

export const editPlaylist = playlist => {
    return $.ajax({
        method: "PATCH",
        url: `/api/playlists/${playlist.id}`
    })
}

export const deletePlaylist = playlistId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlists/${playlistId}`
    })
}

export const getUser = userId => {
    return $.ajax({
        method: "GET",
        url:`/api/users/${userId}`
    })
}

export const addSongToPlaylist = (playlist_song) => {
    return $.ajax({
        method: "POST",
        url: `/api/playlist_songs`,
        data: { playlist_song }
    })
}

export const removeSongFromPlaylist = (playlistSongId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlist_songs/${playlistSongId}`
    })
}

export const getUserPlaylists = userId => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/playlists`,
    })
}

export const getAlbums = () => {
    return $.ajax({
        method: "GET",
        url: "/api/albums",
    })
}
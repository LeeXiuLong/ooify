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
        url: `/api/playlist/${playlist.id}`
    })
}

export const deletePlaylist = playlist => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlist/${playlist.id}`
    })
}

export const getUser = userId => {
    return $.ajax({
        method: "GET",
        url:`/api/users/${userId}`
    })
}
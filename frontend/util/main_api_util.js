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
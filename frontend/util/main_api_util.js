export const getArtist = artist => {
    return $.ajax({
        method: "GET",
        url: `/api/artists/${artist.id}`
    })
}

export const getAlbum = album => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/${album.id}`
    })
}

export const getArtistDisco = artist => {
    return $.ajax({
        method: "GET",
        url: `/api/artists/${artist.id}/albums`
    })
}

export const getAlbumTracks = album => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/${album.id}/songs`
    })
}
class Api::ArtistsController < ApplicationController

    def show
        @artist = Artist.find(params[:id])
        render :show
    end

    def index
        playlist = Playlist.find(params[:playlist_id])
        songs = playlist.songs
        artists = songs.map {|song| Artist.find(song.artist_id)}
        render :index
    end

end
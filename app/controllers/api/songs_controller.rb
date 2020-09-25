class Api::SongsController < ApplicationController 

    def index
        @songs = Song.where(album_id: params[:album_id])
        render :index
    end

    private

    def song_params
        params.require(:song).permit(:title, :album_id, :artist_id, :runtime, :track_number)
    end

end

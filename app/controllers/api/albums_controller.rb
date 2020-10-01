class Api::AlbumsController < ApplicationController

    def show
        @album = Album.find(params[:id])
        render :show
    end

    def index
        if params[:artist_id]
            @albums = Album.where(artist_id: params[:artist_id])
        else
            @albums = Album.all
        end
        render :index
    end
end
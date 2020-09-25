class Api::AlbumsController < ApplicationController

    def show
        @album = Album.find(params[:id])
        render :show
    end

    def index
        @albums = Album.where(artist_id: params[:artist_id])
        render :index
    end
end
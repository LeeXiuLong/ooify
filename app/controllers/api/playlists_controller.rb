class Api::PlaylistsController < ApplicationController 

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render :show
        else
            render json: ["You are either not logged in or this name is not valid."], status: 401
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        if current_user == @playlist.user_id
            if @playlist.update(playlist_params)
                render :show
            end
        else
            render json: ["That is not a valid name."]
        end
    end

    def show
        @playlist = Playlist.find(params[:id])
        render :show
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
    end

    private

    def playlist_params
        params.require(:playlist).permit(:name, :user_id)
    end
end
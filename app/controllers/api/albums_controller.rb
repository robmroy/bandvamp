class Api::AlbumsController < ApplicationController

    def create
        @album = Album.new(album_params)
        if @album.save
        render "/api/albums/show"
        else
        render json: @album.errors.full_messages, status: 422
        end
    end
    
    def show
        @album = Album.find(params[:id])
    end
    
    private
    
    def album_params
        params.require(:album).permit(:name, :band_id, :photo, :description)
    end
    
      
end

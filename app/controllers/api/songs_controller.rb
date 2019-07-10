class Api::SongsController < ApplicationController
    class Api::AlbumsController < ApplicationController

        def create
            @song = song.new(song_params)
            if @song.save
            render "/api/songs/show"
            else
            render json: @song.errors.full_messages, status: 422
            end
        end
        
        def show
            @song = Song.find(params[:id])
        end
        
        private
        
        def song_params
            params.require(:song).permit(:name, :album_id, :audio_file, :description)
        end
        
          
    end
    
end

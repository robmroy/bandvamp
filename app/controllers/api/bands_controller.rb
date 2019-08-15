class Api::BandsController < ApplicationController
    def show
        @band = User.includes(
            photo_attachment: :blob, 
            banner_attachment: :blob,
            albums: 
            {photo_attachment: :blob, 
            songs: {audio_file_attachment: :blob}}).find(params[:id])
        render 'api/bands/show'
    end
end

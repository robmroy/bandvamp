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

    def update
        @band = User.find(params[:id])
        if @band.update(band_params)
          render 'api/bands/show'
        else
          render json: @band.errors.full_messages, status: 422
        end
      end

      private 
      def band_params
        params.require(:band).permit(
          :band_name, :band_description)
      end
end

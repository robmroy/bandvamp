class Api::SearchesController < ApplicationController
    def index 
        @bands = User.top_results(search_params[:query])
        @albums = Album.top_results(search_params[:query])
        @songs = Song.top_results(search_params[:query])
        render :index
      end
    
      private
      def search_params
        params.require(:search).permit(:query)
      end
end

class Api::BandsController < ApplicationController
    def show
        @band = User.find(params[:id])
        render 'api/bands/show'
    end
end

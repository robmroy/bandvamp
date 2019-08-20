class Api::FollowsController < ApplicationController
    def create
        @follow = Follow.new(follow_params)
        @user = User.find(@follow.fan_id)
        if @follow.save
            render 'api/users/show'
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.find_by(
            band_id: follow_params[:band_id],
            fan_id: follow_params[:fan_id]
        )
        @user = User.find(@follow.fan_id)
        @follow.destroy!
        render 'api/users/show'
    end

    private
    
    def follow_params
        params.require(:follow).permit(:band_id, :fan_id)
    end
end

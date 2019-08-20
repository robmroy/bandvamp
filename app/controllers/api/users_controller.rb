class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.messages, status: 422
    end
  end

  def show
    @user = User.includes(followed_bands: {photo_attachment: :blob},
     purchased_albums: [{photo_attachment: :blob}, :band]).find(params[:id])
    render "/api/users/show"
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :band_name)
  end
end

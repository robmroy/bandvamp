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

  def update
    @user = User.find(params[:id])
    p user_params[:photo] ? "------photo-------" : "-------no photo-------"
    p user_params[:user_description] ? "user description" : "no user description"
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, 
      :band_name, :band_description, :user_description, :photo)
  end
end

class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(followed_bands: {photo_attachment: :blob},
      purchased_albums: [{photo_attachment: :blob}, :band]).find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: { login: "Invalid username or password" }, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: { logout: "There's no one to sign out" }, status: 404
    end
  end
end

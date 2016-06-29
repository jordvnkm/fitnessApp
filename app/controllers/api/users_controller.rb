class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)

    if @user.save
      render '/api/users/show'
    else
      @error = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :profile_img_url)
  end


end

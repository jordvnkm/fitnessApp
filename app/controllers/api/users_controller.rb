require 'byebug'

class Api::UsersController < ApplicationController

  def show
    @user = current_user
    if @user
      render "api/users/show"
    else
      render json: nil, status: 404
    end
  end

  def create
    @user = Api::User.new(user_params)
    "debugger"
    if @user.save
      login_user(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :profile_img_url)
  end


end

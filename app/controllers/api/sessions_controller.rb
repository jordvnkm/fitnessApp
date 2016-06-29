class Api::SessionsController < ApplicationController

  def create
    @user = Api::User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      @errors = ['invalid username/password']
      render 'api/shared/error', status: 401
    else
      login_user(@user)
      render 'api/users/show'
    end

  end

  def show
    @user = current_user

    if @user
      render "api/users/show"
    else
      @errors = nil
      render "api/shared/error", status: 404
    end
  end

  def destroy
    @user = current_user

    if @user
      logout_user
      render 'api/users/show'
    else
      @errors = ['nobody logged in']
      render "api/shared/error", status: 404
    end

  end
end

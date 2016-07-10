class Api::ProfilesController < ApplicationController

  def show
    if params[:id] == 0.to_s
      @errors = ['invalid user id']
      render 'api/shared/error', status: 404
      return
    end
    @user = Api::User.find(params[:id])

    if @user
      @favorite_routes = @user.favorite_routes
      @completed_routes = @user.completed_routes
      @authored_routes = @user.authored_routes
      render 'api/profiles/show'
    else
      @errors = ['invalid user id']
      render 'api/shared/error', status: 404
    end
  end

end

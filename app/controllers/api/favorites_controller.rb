class Api::FavoritesController < ApplicationController

  def create
    @favorite = Api::Favorite.new(favorite_params)

    if @favorite.save
      render '/api/favorites/show'
    else
      @errors = @favorite.errors.full_messages
      render '/api/shared/error', status: 401
    end
  end

  def show
    @user = Api::User.find(params[:id])

    if @user
      @favorites = @user.favorites
      render '/api/favorites/index'
    else
      @errors = ["Unable to find favorites for id"]
      render '/api/shared/error', status: 404
    end
  end

  def destroy
    @favorite = Api::Favorite.find(params[:id])

    if @favorite
      @favorite.destroy
      render '/api/favorites/show'
    else
      @errors = ["no favorite to delete"]
      render '/api/shared/error', status: 404
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:route_id, :user_id)
  end
end

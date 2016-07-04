class Api::FollowingsController < ApplicationController

  def create
    @following = Api::Following.new(following_params)

    if @following.save
      render '/api/followings/show'
    else
      @errors = @following.errors.full_messages
      render '/api/shared/error', status: 401
    end
  end

  def show
    @followings = Api::Following.where(user_id: params[:id])
    @followings_as_fan = Api::Following.where(fan_id: params[:id])

    if @followings || @followings_as_fan
      render '/api/followings/show'
    else
      @errors = ["could not find any followings for id"]
      render '/api/shared/error', status: 404
    end
  end

  def destroy
    @following = Api::Following.find(params[:id])

    if @following
      @following.destroy
      render '/api/followings/show'
    else
      @errors = ['could not find any followings for id']
      render '/api/shared/error', status: 404
    end
  end

  private
  def following_params
    params.require(:following).permit(:user_id, :fan_id)
  end
end

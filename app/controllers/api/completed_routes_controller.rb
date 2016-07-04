class Api::CompletedRoutesController < ApplicationController

  def show
    @user = Api::User.find(params[:id])

    if @user
      @completeds = @user.completed
      render '/api/completed/index'
    else
      @errors = ['unable to find completed for id']
      render '/api/shared/error', status: 404
    end
  end

  def create
    @completed = Api::CompletedRoute.new(completed_params)

    if @completed.save
      render '/api/completed/show'
    else
      @errors = @completed.errors.full_messages
      render '/api/shared/error', status: 401
    end
  end

  def destroy
    @completed = Api::CompletedRoute.find(params[:id])

    if @completed
      @completed.destroy
      render '/api/completed/show'
    else
      @errors = ['no completed to destroy']
      render '/api/shared/error', status: 404
    end
  end

  private
  def completed_params
    params.require(:completed).permit(:route_id, :user_id, :date, :notes)
  end
end

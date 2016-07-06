class Api::RoutesController < ApplicationController

  def index
    @location = Api::Location.find(params[:location_id]);

    if @location
      @routes = @location.routes
      render '/api/routes/index'
    else
      @errors = ['no location']
      render '/api/shared/error', status: 404
    end
  end


  def show
    @route = Api::Route.find(params[:id])

    if @route
      render 'api/routes/show'
    else
      @errors = ['invalid routes id']
      render 'api/shared/error', status: 404
    end
  end

  def create
    @route = Api::Route.new(route_params)

    if @route.save
      render 'api/routes/show'
    else
      @errors = @route.errors.full_messages
      render 'api/shared/error', status: 401
    end
  end

  def destroy
    @route = Api::Route.find(params[:id])
    if @route
      @route.destroy
      render 'api/routes/show'
    else
      @errors = ['no route with id']
      render 'api/shared/error', status: 404
    end
  end

  private
  def route_params
    params.require(:route).permit(:author_id, :name, :location_id, :notes)
  end
end

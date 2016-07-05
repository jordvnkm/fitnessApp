
class Api::LocationsController < ApplicationController
  def index
    @locations = Api::Location.all
    if @locations
      render 'api/locations/index'
    else
      @errors = ['Couldnt retrieve locations']
      render '/api/shared/error', status: 404
    end
  end

  def show
    @location = Api::Location.find(params[:id])

    if @location
      render 'api/locations/show'
    else
      @errors = ["couln't find location"]
      render 'api/shared/error', status: 404
    end
  end
end

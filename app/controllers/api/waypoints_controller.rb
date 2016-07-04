class Api::WaypointsController < ApplicationController
  def create
    @waypoint = Api::Waypoint.new(waypoint_params)

    if @waypoint.save
      render 'api/waypoints/show'
    else
      @errors = @waypoint.errors.full_messages
      render 'api/shared/error', status: 401
    end
  end


  def show
  end

  private
  def waypoint_params
    params.require(:waypoint).permit(:lat, :lng, :route_id, :order)
  end
end

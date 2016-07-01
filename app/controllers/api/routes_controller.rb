class Api::RoutesController < ApplicationController

  def show
    @route = Api::Route.find(params[:id])

    if @route
      render 'api/routes/show'
    else
      @errors = ['invalid routes id']
      render 'api/share/error', status: 404
    end
  end
end

class Api::Waypoint < ActiveRecord::Base
  validates :lat, :lng, :route_id, :order, presence: true

  belongs_to :route

end

class Api::Location < ActiveRecord::Base
  validates :name, :NE_lat, :NE_lng, :SW_lat, :SW_lng, presence: true


  has_many :routes

end

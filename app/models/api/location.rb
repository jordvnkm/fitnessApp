class Api::Location < ActiveRecord::Base
  validates :name, :center_lat, :center_lng, presence: true


  has_many :routes

end

class Api::Favorite < ActiveRecord::Base
  validates :route_id, :user_id, presence: true

  belongs_to :route
  belongs_to :user
end

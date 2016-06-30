class Api::CompletedRoute < ActiveRecord::Base
  validates :route_id, :user_id, :date, presence: true

  belongs_to :route

  belongs_to :user
end

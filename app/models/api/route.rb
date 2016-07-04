class Api::Route < ActiveRecord::Base
  validates :author_id, :name, :location_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :location,
    class_name: :Location,
    foreign_key: :location_id,
    primary_key: :id

  has_many :waypoints, dependent: :destroy

end

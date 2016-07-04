class Api::Comment < ActiveRecord::Base
  validates :author_id, :content, :route_id, presence: true

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id,
  primary_key: :id

  belongs_to :route,
  class_name: :Route,
  foreign_key: :route_id,
  primary_key: :id
end

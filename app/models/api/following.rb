class Api::Following < ActiveRecord::Base
  validates :user_id, :fan_id, presence: true

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :fan,
  class_name: :User,
  foreign_key: :fan_id,
  primary_key: :id
end

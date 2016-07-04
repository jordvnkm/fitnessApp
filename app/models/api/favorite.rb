class Api::Favorite < ActiveRecord::Base
  validates :route_id, :user_id, presence: true

  belongs_to :route
  belongs_to :user

  def self.find_by_route_and_user(route_id, user_id)
    user = Api::User.find(user_id)

    if user
      favorites = user.favorites
      favorites.each do |favorite|
        if (favorite.route_id == route_id)
          return favorite
        end
      end
    end
    return nil
  end
end

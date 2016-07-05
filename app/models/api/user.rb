class Api::User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :username, :email, uniqueness: true

  after_initialize :ensure_session_token

  has_many :authored_routes,
    class_name: :Route,
    foreign_key: :author_id,
    primary_key: :id

  has_many :completed,
    class_name: :CompletedRoute,
    foreign_key: :user_id,
    primary_key: :id

  has_many :favorites,
    class_name: :Favorite,
    foreign_key: :user_id,
    primary_key: :id

  has_many :completed_routes,
    through: :completed,
    source: :route

  has_many :favorite_routes,
    through: :favorites,
    source: :route

  has_many :comments,
  class_name: :Comment,
  foreign_key: :author_id,
  primary_key: :id

  has_many :followings_as_user,
  class_name: :Following,
  foreign_key: :user_id,
  primary_key: :id

  has_many :followings_as_fan,
  class_name: :Following,
  foreign_key: :fan_id,
  primary_key: :id

  has_many :followers,
    through: :followings_as_user,
    source: :fan

  has_many :followed_users,
    through: :followings_as_fan,
    source: :user

  def self.find_by_credentials(username, password)
    user = Api::User.find_by(username: username)

    return nil if user.nil?

    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def profile_img_url=(url)
    self.profile_img_url = url
  end

  def ensure_session_token

   self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def follower_count
    self.followers.length
  end

end

class Api::User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

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
    reset_session_token!
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digets).is_password(password)
  end

end

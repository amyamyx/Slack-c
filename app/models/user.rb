# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  img_url         :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  attr_reader :password

  has_many :team_memberships
  has_many :direct_memberships
  has_many :channel_memberships
  
  has_many :created_channels,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :Channel

  has_many :teams, through: :team_memberships
  has_many :channels, through: :channel_memberships
  has_many :directs, through: :direct_memberships

  # allow models to access current_user
  # (combined with #set_current_user in application_controller.rb)
  # def self.current
  #   Thread.current[:user]
  # end

  # def self.current=(user)
  #   Thread.current[:user] = user
  # end
  ##

  def User.generate_session_token
    SecureRandom.urlsafe_base64
  end
  
  def User.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.valid_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(input)
    @password = input
    self.password_digest = BCrypt::Password.create(input)
  end

  def valid_password?(input)
    BCrypt::Password.new(self.password_digest).is_password?(input)
  end
end

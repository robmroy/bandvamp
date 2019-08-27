# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  username         :string           not null
#  email            :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  band_name        :string
#  band_description :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  background_color :string
#  user_description :string
#

class User < ApplicationRecord
  attr_reader :password
  has_one_attached :banner
  has_one_attached :photo

  has_many :albums,
  class_name: :Album,
  foreign_key: :band_id
  validate :require_photos

  has_many :follows,
  class_name: :Follow,
  foreign_key: :fan_id

  has_many :followed_bands,
  through: :follows

  has_many :purchases,
  class_name: :Purchase,
  foreign_key: :user_id

  has_many :purchased_albums,
  through: :purchases



  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validate :require_photos
  after_initialize :ensure_session_token



  def require_photos
      if !self.photo.attached?
          file = File.open('app/assets/images/count.jpeg')
          self.photo.attach(io: file, filename: '345892746528734589234728')
      end
      if !self.banner.attached?
        file = File.open('app/assets/images/parallel_cropped.png')
        self.banner.attach(io: file, filename: '345892746528734589234728')
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    generate_unique_session_token
    save!
    self.session_token
  end

  def self.top_results(string)
    string= string.downcase.split(' ').join('%')
    string = '%' + string + '%'
    User.where('lower(band_name) LIKE ?', string).limit(5)
  end


  private 

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end


end

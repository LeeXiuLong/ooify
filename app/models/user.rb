class User < ApplicationRecord
    validates :name, presence: {message: "Enter a name for your profile"}
    validates :email, presence: {message: "You need to enter your email"}, uniqueness: true
    validates :session_token, presence:true, uniqueness:true
    validates :password_digest, presence:true
    validates :password, length:{minimum: 6, allow_nil:true, message:"Your password is too short."}
    validates :birthdate, presence: {message: "You need to enter your birthdate"}
    validates :gender, presence: {message: "Select your gender."}

    attr_reader :password

    before_validation :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        b = BCrypt::Password.new(self.password_digest)
        b.is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end
end

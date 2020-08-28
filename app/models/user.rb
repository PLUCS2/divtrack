# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  company_id      :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord 

    validates :username, :email, :password_digest, :session_token, presence: true 
    validates :username, :email, :session_token, uniqueness: true 
    validate :sufficient_password 
    validate :ok_username
    before_validation :ensure_session_token, :ensure_company_id  

    belongs_to :company, 
    optional: true

    has_one :company, 
    foreign_key: :owner_id, 
    class_name: :User
    
    attr_reader :password

    def self.find_by_credentials(username_or_email, password)
        user = nil 
        if username_or_email.include?("@")
            user = User.find_by(email: username_or_email)
        else 
            user = User.find_by(username: username_or_email)
        end 
        return user if user && user.is_password?(password)
    end 

    def self.generate_session_token
        SecureRandom::urlsafe_base64 
    end 

    def sufficient_password
        return true if self.password.nil? 
        errors.add(base: "password is too short") if password.length < 12 
        
        inc = false 
            password.each_char do |let|
                inc = true if (1..9).to_a.to_s.include?(let)
            end 

        errors.add(base: "password must include an integer") unless inc
    end 

    def ok_username
        errors.add(base: "username must not have the '@' symbol") if self.username.include?("@")
    end 

    def ensure_company_id
        if company_id.nil? 
            employee_end_of_email = "@#{self.email.split("@")[-1]}"
            company = Company.find_by(email_ending: employee_end_of_email)
            if company 
                self.company_id = company.id
            end 
        end
    end 

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end 

    def password=(password)
        # debugger
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end 

    def reset_session_token! 
        self.session_token = self.class.generate_session_token
        self.session_token = self.class.generate_session_token until self.save 
        self.session_token
    end 

end 

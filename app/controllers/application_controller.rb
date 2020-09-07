class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in? 
    
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.reset_session_token! 
        @current_user = user 
    end 

    def logged_in? 
        !!current_user
    end 

    def logout 
        current_user.reset_session_token! 
        @current_user = nil 
        session[:session_token] = nil
    end 

    def ensure_admin_or_owner 
        render json: ["You must be an admin to make this change"], status: 403 if !current_user.admin? 
    end 

end

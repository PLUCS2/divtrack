class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials(params[:username_or_email], params[:password])
        if @user 
            login(@user)
            render "api/users/show"
        else 
            render json: ["That username and password combination is incorrect"], status: 401 
        end 
    end 

    def destroy 
        if logged_in? 
            logout
            render json: {message: "logged out!"}
        else 
            render json: ["No current user"], status: 404
        end 
    end 

end 
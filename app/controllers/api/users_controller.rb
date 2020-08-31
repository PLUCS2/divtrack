class Api::UsersController < ApplicationController 

    def create 
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show 
        else 
            render json: @user.errors.full_messages, status: 401 
        end 
    end 

    def show 
        @user = User.find(params[:id])
        render :show 
    end 

    def update 
        @user = User.find(params[:id])
        if @user == current_user && @user.update_attributes(user_params)
            render :show 
        else 
            render json: ["User failed to update"], status: 401 
        end 
    end 

    def destroy 
        @user = User.find(params[:id])
        if @user == current_user
            @user.destroy
            render "api/companies/index" 
        end 
    end 

    private 

    def user_params 
        params.require(:user).permit(:username, :email, :password, :company_id, :first_name, :last_name, :pronoun)
    end 

end 
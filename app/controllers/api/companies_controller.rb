class Api::CompaniesController < ApplicationController 

    def create 
        @company = Company.new(company_params)
        @company.owner_id = current_user.id 
        if @company.save 
            current_user.company_id = @company.id
            current_user.admin = true; 
            current_user.save
            render "api/companies/show"
        else 
            render json: @company.errors.full_messages, status: 401
        end 
    end 

    def update 
        @company = Company.find(params[:id])
        old_email = @company.email_ending
        if @company.update_attributes(company_params)
            if old_email != @company.email_ending
                @company.redo_user_emails  
                render "api/companies/show"
            else 
                render "api/companies/show"
            end 
        else 
            render json: @company.errors.full_messages, status: 401
        end 
    end 

    def show 
        @company = Company.find(params[:id])
        @user = current_user
    end 

    def index 
        @companies = Company.all 
        render "api/companies/index"
    end 

    def destroy 
        @company = Company.find(params[:id])
        if @company.owner_id == current_user.id
            @company.destroy 
            redirect_to :index 
        else 
            render json: ["You cannot delete this company"], status: 401 
        end 
    end 

    private 

    def company_params 
        params.require(:company).permit(:name, :email_ending)
    end 

end 
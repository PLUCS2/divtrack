class Api::CompaniesController < ApplicationController 

    def create 
        @company = Company.new(company_params)
        if @company.save 
            render "api/companies/show"
        else 
            render json: @company.errors.full_messages, status: 401
        end 
    end 

    def update 
        @company = Company.find(params[:id])
        if @company.update_attributes(company_params)
            render "api/companies/show"
        else 
            render json: @company.errors.full_messages, status: 401
        end 
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
        params.permit(:company).require(:name, :email_ending)
    end 

end 
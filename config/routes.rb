Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 

    resources :users, only: [:create, :show, :destroy, :update]
    post '/users/admin/:id', to: 'users#admin', as: 'admin'

    resources :companies, only: [:create, :show, :update, :index, :destroy]

    resource :session, only: [:create, :destroy]

  end
end

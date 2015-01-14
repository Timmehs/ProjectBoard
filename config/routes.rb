Rails.application.routes.draw do
  root to: 'static_pages#index'
  get "/auth/:provider/callback" => "sessions#create"
  namespace :api, defaults: { format: :json } do
    resource :sessions, only: [:signin, :create, :destroy]
    resources :users, only: [ :show ]
  end 

end

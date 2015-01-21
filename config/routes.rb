Rails.application.routes.draw do
  root to: 'static_pages#index'
  get "/auth/:provider/callback" => "api/sessions#create"

  namespace :api, defaults: { format: :json } do
    resource :sessions, only: [:signin, :create, :destroy]
    resources :users, only: [ :show ]
    resources :projects, only: [:index, :create, :destroy]
  end

end

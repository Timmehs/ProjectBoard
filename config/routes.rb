Rails.application.routes.draw do
  root to: 'static_pages#index'
  get "/auth/:provider/callback" => "api/sessions#create"

  namespace :api, defaults: { format: :json } do
    resources :boards, only: [:create, :index, :update, :destroy]
    resource :sessions, only: [:signin, :create, :destroy]
    resources :users, only: [ :index, :show ]
    resources :projects, only: [:index, :create, :destroy]
  end

end

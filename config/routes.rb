Rails.application.routes.draw do
  root to: 'static_pages#index'
  get "/auth/:provider/callback" => "sessions#create"
  resource :sessions, only: [:signin, :create, :destroy]
end

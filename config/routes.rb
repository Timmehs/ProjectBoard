Rails.application.routes.draw do
  root to: 'static_pages#index'
  resource :sessions, only: [:signin, :create, :destroy]
end

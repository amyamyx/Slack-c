Rails.application.routes.draw do
  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]
end

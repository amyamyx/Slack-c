Rails.application.routes.draw do
  get 'api/teams/:team_id/channels/:user_id', to: 'api/channels#joined_index'
  root to: 'static_pages#root'
  mount ActionCable.server => '/cable'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index] do
      resources :teams, only: [:index]
    end
    
    resource :session, only: [:create, :destroy]
    
    resources :teams, only: [:show, :create, :index] do 
      resources :team_memberships, only: [:index, :create]
      resources :channels, only: [:index, :create]
      resources :directs, only: [:index, :create]
    end

    resources :channels, only: [:show, :update, :destroy] do
      resources :channel_memberships, only: [:index, :create]
      resources :messages, only: [:index, :create]
    end
    
    resources :directs, only: [:show] do
      resources :direct_memberships, only: [:index, :create, :update]
      resources :messages, only: [:index, :create]
    end
  end
end

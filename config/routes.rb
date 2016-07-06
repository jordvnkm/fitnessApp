Rails.application.routes.draw do
  root "static_pages#index"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:show, :create, :destroy]
    resources :profiles, only: [:show]
    resources :routes, only: [:index, :show, :create, :destroy]
    resources :locations, only: [:index, :show]
    resources :waypoints, only: [:show, :create]
    resources :favorites, only: [:show, :create, :destroy]
    resources :completed_routes, only: [:show, :create, :destroy]
    resources :comments, only: [:show, :create, :destroy]
    resources :followings, only: [:show, :create, :destroy]
  end
end

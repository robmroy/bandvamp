Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :bands, only: [:show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :albums, only: [:create, :show, :index]
    resources :songs, only: [:create, :show]
    resources :searches, only: [:index]
    resources :follows, only: [:create, :destroy]
    resources :purchases, only: [:create]
  end
end


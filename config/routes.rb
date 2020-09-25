Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:show]
    resources :albums, only: [:show] do
      resources :songs, only: [:index]
    end
    resources :artists, only: [:show] do
      resources :albums, only: [:index]
    end
  end
end

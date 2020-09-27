Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :playlists, only: [:create, :destroy, :update]
    end
    resources :playlist_songs, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:show]
    resources :albums, only: [:show] do
      resources :songs, only: [:index]
    end
    resources :playlists, only:[:show]
    resources :artists, only: [:show] do
      resources :albums, only: [:index]
    end

    resources :albums, only: [:index]
  end
end

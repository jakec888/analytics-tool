Rails.application.routes.draw do
  # get '/api', to: 'api#index'
  # get '/api', to: 'api#all'

  resources :api

  get '/redirect', to: 'redirect#index'
end

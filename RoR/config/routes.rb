Rails.application.routes.draw do
  get '/api', to: 'api#index'

  get '/redirect', to: 'redirect#index'
end

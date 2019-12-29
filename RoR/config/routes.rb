Rails.application.routes.draw do
  
  namespace 'api' do
    get '/links/:userId', to: 'link#index'
    resources :link
  end

  get '/redirect', to: 'redirect#index'

end
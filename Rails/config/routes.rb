Rails.application.routes.draw do

  namespace 'api' do
    get '/links/:userId', to: 'link#all'
    resources :link
  end

  get '/redirect/:redirectId', to: 'redirect#index'

end
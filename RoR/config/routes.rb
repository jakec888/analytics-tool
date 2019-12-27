Rails.application.routes.draw do

  namespace 'api' do
    # this would be the ideal situation for CRUD,
    # however, I am adapting to my client app.
    # resources :link

    # Create
    post '/link', to: 'api#create'

    # Read
    get '/links/:userId', to: 'api#index'
    # get '/links/', to: 'api#index'

    # Update
    put '/link/edit/:id', to: 'api#update'

    # Delete
    delete '/link/delete/:id', to: 'api#destroy'
  end

  get '/redirect', to: 'redirect#index'
  
end

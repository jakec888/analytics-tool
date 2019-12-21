Rails.application.routes.draw do
  get 'hello_world', to: 'base#index'
  get 'redirect', to: 'redirect#index'
  get 'redirect/page', to: 'redirect#page'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

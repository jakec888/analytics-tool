Rails.application.routes.draw do
  get 'client', to: 'client#index'
  get 'client/sample', to: 'client#sample'
  get 'hello_world', to: 'hello_world#index'
  get 'redirect', to: 'redirect#index'
  get 'redirect/page', to: 'redirect#page'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

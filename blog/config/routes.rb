Rails.application.routes.draw do
  resources :comments
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :users do 
    resources :posts
  end

  get :all_posts, controller: "posts"

  resources :posts do
    resources :comments
  end
  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

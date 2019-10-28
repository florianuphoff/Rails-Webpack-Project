Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index', via: :get

  get "/public/*path", to: redirect { |params, request|
    path = request.original_url
    path.slice!('/public')
    "#{path}"
  }
  
  
end

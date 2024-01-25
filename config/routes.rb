Rails.application.routes.draw do
  root 'root#index'

  namespace :api, :path => "", :constraints => {:subdomain => "api"}, :defaults => {:format => :json} do
    namespace :v1 do
      resources :messages
    end
  end
end

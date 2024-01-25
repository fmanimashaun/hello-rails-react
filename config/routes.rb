Rails.application.routes.draw do
  root 'root#index'

  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      get '/greeting_random', to: 'greetings#random'
    end
  end
end

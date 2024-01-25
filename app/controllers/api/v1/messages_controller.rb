class API::V1::MessagesController < ApplicationController
  @messages = Message.all
end

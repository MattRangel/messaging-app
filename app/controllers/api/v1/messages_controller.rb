class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    chat = params[:chat_id] ?
      current_user.chats.find(params[:chat_id]) :
      Chat.find_or_create_of_users([current_user.id, *params[:user_ids]])
    message = Message.create(user: current_user, chat: chat, text: params[:text])
    render json: message.as_json(only: [:id, :text, :user_id, :created_at])
  end
end

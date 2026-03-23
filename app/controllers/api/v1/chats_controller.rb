class Api::V1::ChatsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_chats, only: [:index, :show]

  def index
    render json: @chats
  end

  def show
    render json: @chats.find(params[:id])
  end

  private
  def set_chats
    @chats = current_user.chats
  end
end

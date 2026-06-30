class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :destroy]

  def index
    users = User.all
    render json: users.to_json(only: [:id, :name])
  end

  def show
    render json: @user.filtered
  end

  def show_current_user
    render json: current_user.filtered(is_current_user: true)
  end

  def destroy
  end

  def update_current
    current_user.update({
      name: params[:name]
    })
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

end

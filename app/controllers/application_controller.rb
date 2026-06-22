class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  # allow_browser versions: :modern

  protected
  def authenticate_user!
    if user_signed_in?
      super
    else
      render status: :unauthorized, json: { error: "Must be logged in to perform action" }
    end
  end
end

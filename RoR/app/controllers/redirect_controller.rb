class RedirectController < ApplicationController

  def index
    link = Link.find_by(redirectId: params[:redirectId])
    puts link
    puts link["id"]
    redirect_to link["link"]
  end

end

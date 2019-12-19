class RedirectController < ApplicationController
  def index
    redirect_to 'https://google.com'
  end

  def sample
  end
end

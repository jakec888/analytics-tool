class RedirectController < ApplicationController
  def index
    # REDIRECT

    # get requests with a link id (redirectId) as a parameter

    # should do the following two things
    # - add a click (+1) to the link's data
    # - should get the link's redirect url and redirect to that url
    link = Link.find_by(redirectId: params[:redirectId])

    date = Time.now
    today = date.strftime("%m/%d/%Y")

    data = Analytic.find_by(date: today, link_id: link["id"])

    if data
      data.clicks += 1
      if data.save
        redirect_to link["link"]
      else
        render json: data.errors, status: :unprocessable_entity
      end
    else
      new_data = Analytic.create(date: today, clicks: 1, link_id: link["id"])
      if new_data.save
        redirect_to link["link"]
      else
        render json: new_data.errors, status: :unprocessable_entity
      end
    end
    
  end

end

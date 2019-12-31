module Api
  class LinkController < ApplicationController
    def all
      # READ
      # get request that includes the user's id (userId) as a parameter
      # should return a list of object of the user's links
      # render json: Link.where(userId: params[:userId]).order('date DESC'), status: :ok
      links = Link.where(userId: params[:userId]).order('date DESC')
      render :json => links.to_json(:include => :analytics)
    end

    def show
      link = Link.find(params[:id])
      render json: link, status: :ok
      # render :json => link.to_json(:include => :analytics)
    end

    def create
      # Create
      # post request that takes in the following:
      #     - a user id
      #     - url/link
      #     - title
      #     - date
      #     - data
      #         -- when creating a link data is often a list (that is empty)
      #            Rhat includes object of date and click
      # should return the input but with mongo id (_id)
      userId = link_params['userId']
      link = link_params['link']
      title = link_params['title']
      date = link_params['date']

      base_url = URI(request.base_url)
      protocol = base_url.scheme
      if base_url.port
        host = "#{base_url.host}:#{base_url.port}"
      else
        host = base_url.host
      end
      redirectId = SecureRandom.uuid
      redirectURL = "#{protocol}://#{host}/redirect/#{redirectId}"

      link = Link.create(userId: userId, redirectId: redirectId, redirectURL: redirectURL, link: link, title: title, date: date)
      
      if link.save
        render json: link, status: :ok
      else
        render json: link.errors, status: :unprocessable_entity
      end
    end
    
    def destroy
      # DELETE
      # delete request that takes in the link id (linkId as a parameter)
      # the link id will be used by mongoose to delete the object
      # should return a random string with a 200 code to show that the link
      # has been successfully delete the object
      # should return a random string with a 200 code to show that the link
      # has been successfully deleted
      link = Link.find(params[:id])
      link.destroy
      render json: link, status: :ok
    end

    def update
      # UPDATE
      # put request that asks for link id (linkId) as a parameter
      # w/ the request body as an object of the link and it's
      # updated values
      # should return the mongo version of the response as an object
      link = Link.find(params[:id])
      if link.update_attributes(link_params)
        render json: link, status: :ok
      else
        render json: link.errors, status: :unprocessable_entity
      end
    end

    private

    def link_params
      params.permit(:userId, :link, :title, :date, :data)
    end

  end
end

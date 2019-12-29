module Api
  class LinkController < ApplicationController
    def index
      puts params[:userId]
      render json: Link.where(userId: params[:userId]).order('date DESC'), status: :ok
    end

    def show
      link = Link.find(params[:id])
      render json: link, status: :ok
    end

    def create
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
      link = Link.find(params[:id])
      link.destroy
      render json: link, status: :ok
    end

    def update
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

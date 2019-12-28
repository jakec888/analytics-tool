module Api
  class ApiController < ApplicationController

    # Create
    def create
      # puts link_params

      # from request params
      userId = link_params['userId']
      link = link_params['link']
      title = link_params['title']
      date = link_params['date']
      data = link_params['data']

      puts request.base_url

      base_url = URI(request.base_url)

      protocol = base_url.scheme

      if base_url.port
        host = "#{base_url.host}:#{base_url.port}"
      else
        host = base_url.host
      end

      redirectId = SecureRandom.uuid

      redirectURL = "#{protocol}://#{host}/redirect/#{redirectId}"

      puts redirectURL

      link = Link.create(userId: userId, redirectId: redirectId, redirectURL: redirectURL, link: link, title: title, date: date)
      
      if link.save
        render json: {status: 'SUCCESS', message:'Saved link', data:link}, status: :ok
      else
        render json: {status: 'ERROR', message:'Link not saved', data:link.errors}, status: :unprocessable_entity
      end

    end
    
    # Read (done)
    def index
      render json: Link.where(params[:userId]).order('date DESC')
    end
  
    # Read One
    # def show
    #   link = Link.find(params[:userId])
    #   render json: {status: 'SUCCESS', message:'Loaded link', data:link},status: :ok
    # end
  
    # Update
    def update
      link = Link.find(params[:id])
      if link.update_attributes(link_params)
        render json: {status: 'SUCCESS', message:'Updated link', data:link},status: :ok
      else
        render json: {status: 'ERROR', message:'Link not updated', data:link.errors},status: :unprocessable_entity
      end
    end
  
    # Delete
    def destroy
      link = Link.find(params[:id])
      link.destroy
      render json: {status: 'SUCCESS', message:'Deleted link', data:link}, status: :ok
    end

    private
  
    def link_params
      params.permit(
        :userId, 
        :link, 
        :title, 
        :date, 
        :data,
      )

      # "userId": "9",
      # "link": "https://google.com/",
      # "title": "Sample Python",
      # "date": "2019-12-28T03:50:38.316Z",
      # "data": []
    end
  
  end
  
end
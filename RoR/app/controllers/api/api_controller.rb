module Api
  class ApiController < ApplicationController

    def index
      render json: {status: 'SUCCESS', message:'This is an Example'}, status: :ok
    end
    
    # Read
    # def index
    #   # links = Link.order('created_at DESC');
    #   puts userId_params
    #   links = Link.find(userId_params)
    #   render json: {status: 'SUCCESS', message:'Loaded links', data:links},status: :ok
    # end
  
    # Read
    def show
      link = Link.find(params[:userId])
      render json: {status: 'SUCCESS', message:'Loaded link', data:link},status: :ok
    end
  
    # Create
    def create
      link = Link.new(link_params)
      if link.save
        render json: {status: 'SUCCESS', message:'Saved link', data:link}, status: :ok
      else
        render json: {status: 'ERROR', message:'Link not saved', data:link.errors}, status: :unprocessable_entity
      end
    end
  
    # Delete
    def destroy
      link = Link.find(params[:linkId])
      link.destroy
      render json: {status: 'SUCCESS', message:'Deleted link', data:link}, status: :ok
    end
  
    # Update
    def update
      link = Link.find(params[:linkId])
      if link.update_attributes(link_params)
        render json: {status: 'SUCCESS', message:'Updated link', data:link},status: :ok
      else
        render json: {status: 'ERROR', message:'Link not updated', data:link.errors},status: :unprocessable_entity
      end
    end
  
    private
  
    def link_params
      params.permit(:userId, :redirectId, :redirectURL, :link, :title, :date)
    end
  
    def userId_params
      params.permit(:userId)
    end
  
  end
  
end
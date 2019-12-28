module Api
  class ApiController < ApplicationController

    # Create
    def create
      link = Link.new(link_params)
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
      params.permit(:userId, :redirectId, :redirectURL, :link, :title, :date)
    end
  
  end
  
end
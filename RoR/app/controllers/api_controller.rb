class ApiController < ApplicationController

  # def index
  #   render json: {status: 'SUCCESS', message:'This is an Example'}, status: :ok
  # end
  
  def index
    links = Link.order('created_at DESC');
    render json: {status: 'SUCCESS', message:'Loaded links', data:links},status: :ok
  end

  def show
    link = Link.find(params[:id])
    render json: {status: 'SUCCESS', message:'Loaded link', data:link},status: :ok
  end

  def create
    link = Link.new(link_params)
    if link.save
      render json: {status: 'SUCCESS', message:'Saved link', data:link}, status: :ok
    else
      render json: {status: 'ERROR', message:'Link not saved', data:link.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    link = Link.find(params[:id])
    link.destroy
    render json: {status: 'SUCCESS', message:'Deleted link', data:link}, status: :ok
  end


  def update
    link = Link.find(params[:id])
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

end

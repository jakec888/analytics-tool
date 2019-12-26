class ApiController < ApplicationController

  def index
    render json: {status: 'SUCCESS', message:'This is an Example'}, status: :ok
  end
  
end

# frozen_string_literal: true

class BaseController < ApplicationController
  layout "base"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end

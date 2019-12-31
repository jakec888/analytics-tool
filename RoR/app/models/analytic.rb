class Analytic < ApplicationRecord
  belongs_to :link, dependent: :destroy
end

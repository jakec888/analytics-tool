class Dataa < ApplicationRecord
   belongs_to :link, dependent: :destroy
end

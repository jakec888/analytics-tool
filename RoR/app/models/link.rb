class Link < ApplicationRecord
  validates :userId, presence: true
  validates :redirectId, presence: true
  validates :redirectURL, presence: true
  validates :link, presence: true
  validates :title, presence: true
  validates :date, presence: true

  has_many :dataas
end

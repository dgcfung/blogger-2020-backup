class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  # validates :title, presence: true,
  #                   length: { minimum: 5 }

  # see extra line on https://guides.rubyonrails.org/getting_started.html
end

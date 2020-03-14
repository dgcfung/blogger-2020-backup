# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


# seed one user

@current_user = User.find(1)
5.times do 
    @post = @current_user.posts.build(body: Faker::Lorem.paragraphs)
    @post.save
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.delete_all
Album.delete_all
placeholder = File.open('app/assets/images/parallel_cropped.png')
stones_pic = File.open('app/assets/images/stone-wheels.jpg')
homeworld = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Arthur+Vyncke/homeworld.jpg')
stones = User.new(
  username: "rolling_stones",
  email: "mickjagger@yahoo.com",
  band_name: "The Rolling Stones",
  password: "pass123")
  stones.banner.attach(io: stones_pic, filename: "stone-wheels.jpg")
  stones.photo.attach(io: placeholder, filename: '345892746528734589234728-stone')
stones.save!

stones_pic.rewind
placeholder.rewind

rob = User.new(
  username: "rob",
  email: "rob@yahoo.com",
  password: "pass123",
)
rob.banner.attach(io: homeworld, filename: "stone-wheels-rob.jpg")
# rob.photo.attach(io: stones_pic, filename: "stone-wheels.jpg")
# rob.banner.attach(io: placeholder, filename: '345892746528734589234728')
rob.save!

album1 = Album.new(
  band_id: stones.id,
  name: "Test Album",
)
worldcup= File.open('app/assets/images/worldcup.png')
album1.photo.attach(io: worldcup, filename: "worldcup.png")
album1.save!
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
placeholder = File.open('app/assets/images/parallel_cropped.png')

stones = User.create!(
  username: "rolling_stones",
  email: "mickjagger@yahoo.com",
  band_name: "The Rolling Stones",
  password: "pass123")
  stones_pic = File.open('app/assets/images/stone-wheels.jpg');
stones.photo.attach(io: stones_pic, filename: "stone-wheels.jpg");

rob = User.create!(
  username: "rob",
  email: "rob@gmail.com",
  password: "pass123"
)
rob.photo.attach(io: placeholder, filename: '345892746528734589234728')

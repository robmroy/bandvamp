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
Song.delete_all
placeholder = File.open('app/assets/images/parallel_cropped.png')
stones_pic = File.open('app/assets/images/stone-wheels.jpg')
homeworld_cover = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Arthur+Vyncke/homeworld.jpg')
shapely_fluctuation_cover =open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Punch+Deck/shapely.jpg')
lumbering_pseudo_vamps_cover = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Nakarada/Lumbering+pseudo+vamps.jpg')
scandos_journey_cover=open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Nakarada/scando/scando.jpg')
scando_theme = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Nakarada/scando/alexander-nakarada-scandos-theme.mp3')
unsafe = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Nakarada/scando/alexander-nakarada-unsafe-roads.mp3')
blood_eagle = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Nakarada/scando/alexander-nakarada-blood-eagle.mp3')
reborn = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Nakarada/scando/alexander-nakarada-reborn.mp3')
pseudo = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Nakarada/alexander-nakarada-pseudo.mp3')
lumberer = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Nakarada/alexander-nakarada-jack-the-lumberer.mp3')
homeworld_collapse = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Arthur+Vyncke/arthur-vyncke-homeworld-collapse.mp3')
one_more_time = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Arthur+Vyncke/arthur-vyncke-one-more-time.mp3')
turning_the_fight = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Arthur+Vyncke/arthur-vyncke-turning-the-fight-around.mp3')
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
rob.banner.attach(io: homeworld_cover, filename: "homeworldcover.jpg")
rob.save!


nakarada = User.new(
  username: "nakarada",
  email: "nakarada@gmail.com",
  password: "pass123",
  band_name: "Alexander Nakarada"
)
nakarada.save!

lumbering = Album.new(
  band_id: nakarada.id,
  name: "Lumbering Pseudo Vamps"
)
lumbering.photo.attach(io: lumbering_pseudo_vamps_cover, filename: "lpv.jpg")
lumbering.save!

scandos = Album.new(
  band_id: nakarada.id,
  name: "Scando's Journey"
)
scandos.photo.attach(io: scandos_journey_cover, filename: "scando.jpg")
scandos.save!

scando_song = Song.new(
  album_id: scandos.id,
  name: "Scando's Theme"
)
scando_song.audio_file.attach(io: scando_theme, filename: "scando.mp3")
scandos.save!

unsafe_song = Song.new(
  album_id: scandos.id,
  name: "Unsafe Roads"
)
unsafe_song.audio_file.attach(io: unsafe, filename: "unsafe.mp3")
unsafe_song.save!

be_song = Song.new(
  album_id: scandos.id,
  name: "Blood Eagle"
)

be_song.audio_file.attach(io: blood_eagle, filename: "blood_eagle.mp3")
be_song.save!

reborn_song = Song.new(
  album_id: scandos.id,
  name: "Reborn"
)

reborn_song.audio_file.attach(io: reborn, filename: "reborn.mp3")
reborn_song.save!

lumberer_song = Song.new(
  album_id: lumbering.id,
  name: "Jack the Lumberer"
)

lumberer_song.audio_file.attach(io: lumberer, filename: "lumberer.mp3")
lumberer_song.save!

pseudo_song = Song.new(
  album_id: lumbering.id,
  name: "Pseudo"
)

pseudo_song.audio_file.attach(io: pseudo, filename: 'pseudo.mp3')
pseudo_song.save!

vyncke = User.new(
  username: "vyncke",
  password: "pass123",
  band_name: "Arthur Vyncke",
  email: 'avyncke@gmail.com'
)

vyncke.save!

homeworld = Album.new(
  band_id: vyncke.id,
  name: "Homeworld"
)
homeworld_cover = open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Arthur+Vyncke/homeworld.jpg')
homeworld.photo.attach(io: homeworld_cover, filename: "homeworld_cover.jpg")
homeworld.save!

hc = Song.new(
  album_id: homeworld.id,
  name: "Homeworld Collapse"
)

hc.audio_file.attach(io: homeworld_collapse, filename: "homeworld_collapse.mp3")
hc.save!

omt = Song.new(
  album_id: homeworld.id,
  name: "One More Time"
)

omt.audio_file.attach(io: one_more_time, filename: "one_more_time.mp3")
omt.save!

ttf = Song.new(
  album_id: homeworld.id,
  name: "Turning The Fight Around"
)

ttf.audio_file.attach(io: turning_the_fight, filename: "turning_the_fight.mp3")

ttf.save!

punch = User.new(
  username: "punch_deck",
  band_name: "Punch Deck",
  email: "punchdeck@gmail.com",
  password: "pass123"
)

punch.save!

shapely = Album.new(
  band_id: punch.id,
  name: "Shapely Fluctuation"
)

shapely.photo.attach(io: shapely_fluctuation_cover, filename: 'shapely.jpg')
shapely.save!

wtp = Song.new(
  album_id: shapely.id,
  name: "Wandering the Path"
)
wtp.audio_file.attach(io: open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Punch+Deck/punch-deck-wandering-the-path.mp3'),
filename: 'wandering.mp3')
wtp.save!
longing = Song.new(
  album_id: shapely.id,
  name: "Longing"
)
longing.audio_file.attach(io: open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Punch+Deck/punch-deck-longing.mp3'),
filename: "longing.mp3")
longing.save!
wavy = Song.new(
  album_id: shapely.id,
  name: "Keep it Wavy"
)

wavy.audio_file.attach(io: open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Punch+Deck/punch-deck-keep-it-wavy.mp3'),
filename: "wavy.mp3")
wavy.save!
coal = Song.new(
  album_id: shapely.id,
  name: "Coalescence"
)

coal.audio_file.attach(io: open('https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/Punch+Deck/punch-deck-coalescence.mp3'),
filename: 'coalescence.mp3')
coal.save!

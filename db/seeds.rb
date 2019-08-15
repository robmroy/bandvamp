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

url2 = 'https://bandvamp-seeds.s3-us-west-1.amazonaws.com/freemusicarchive/'

myurl = url2 + 'my_bubba/'

mb = User.new(username: 'bubba',
band_name: 'My Bubba & Mi',
email: 'mybubba@gmail.com',
password: "pass123")

mb.banner.attach(io: open(myurl+'banner.png'), filename: 'banner.png')
mb.save!

wyurl = myurl + 'wild/'
wy = Album.new(band_id: mb.id, name: "Wild & You")

wy.photo.attach(io: open(wyurl+'My_Bubba__Mi_-_Wild__You.jpg'), filename: 'My_Bubba__Mi_-_Wild__You.jpg')

wy.save!

nm = Song.new(album_id: wy.id, name: "Nothing Much", track_number: 1)
nm.audio_file.attach(io: open(wyurl+'My_Bubba__Mi_-_01_-_Nothing_Much.mp3'),
filename: 'My_Bubba__Mi_-_01_-_Nothing_Much.mp3')

nm.save!

okn = Song.new(album_id: wy.id, name: "Oh Kiss No", track_number: 2)
okn.audio_file.attach(io: open(wyurl+ 'My_Bubba__Mi_-_02_-_Oh_Kiss_No.mp3'),
filename: 'My_Bubba__Mi_-_02_-_Oh_Kiss_No.mp3')

okn.save!

wysong = Song.new(album_id: wy.id, name: "Wild & You", track_number: 3)
wysong.audio_file.attach(io: open(wyurl+'My_Bubba__Mi_-_03_-_Wild__You.mp3'),
filename: 'My_Bubba__Mi_-_03_-_Wild__You.mp3')
wysong.save!

gnh = Song.new(album_id: wy.id, name: "Good Night Heart", track_number: 4)
gnh.audio_file.attach(io: open(wyurl+'My_Bubba__Mi_-_04_-_Good_Night_Heart.mp3'),
filename: 'My_Bubba__Mi_-_04_-_Good_Night_Heart.mp3')
gnh.save!

thruthru = Song.new(album_id: wy.id, name: "Through & Through", track_number: 5)
thruthru.audio_file.attach(io: open(wyurl+'My_Bubba__Mi_-_05_-_Through__Through.mp3'),
filename: 'My_Bubba__Mi_-_05_-_Through__Through.mp3')

thruthru.save!

iturl = myurl+'italy/'
italy = Album.new(band_id: mb.id, name: "How it's done in Italy")
italy.photo.attach(io: open(iturl+'My_Bubba__Mi_-_How_Its_Done_In_Italy.jpg'),
filename: 'My_Bubba__Mi_-_How_Its_Done_In_Italy.jpg')

italy.save!

gone = Song.new(album_id: italy.id, name: 'Gone', track_number: 1)
gone.audio_file.attach(io: open(iturl+ 'My_Bubba__Mi_-_01_-_Gone.mp3'),
filename: 'My_Bubba__Mi_-_01_-_Gone.mp3')
gone.save!

bb = Song.new(album_id: italy.id, name: "Bubba's Blues", track_number: 2)
bb.audio_file.attach(io: open(iturl+"My_Bubba__Mi_-_02_-_Bubbas_Blues.mp3"),
filename: 'My_Bubba__Mi_-_02_-_Bubbas_Blues.mp3')
bb.save!

sg = Song.new(album_id: italy.id, name: 'Steamengeene', track_number: 3)
sg.audio_file.attach(io: open(iturl+'My_Bubba__Mi_-_03_-_Steamengeene.mp3'),
filename: 'My_Bubba__Mi_-_03_-_Steamengeene.mp3')

sg.save!

rr = Song.new(album_id: italy.id, name: "Really Really", track_number: 4)
rr.audio_file.attach(io: open(iturl+'My_Bubba__Mi_-_04_-_Really_Really.mp3'),
filename: 'My_Bubba__Mi_-_04_-_Really_Really.mp3')

rr.save!

satisfied = Song.new(album_id: italy.id, name: "Satisfied mind", track_number: 5)
satisfied.audio_file.attach(io: open(iturl+'My_Bubba__Mi_-_05_-_Satisfied_mind.mp3'),
filename: 'My_Bubba__Mi_-_05_-_Satisfied_mind.mp3')

satisfied.save!










gurl = url2 + 'gillicuddy/'

g = User.new(username: 'gillicuddy',
band_name: "Gillicuddy",
email: "gillicuddy@gmail.com",
password: "pass123")

g.photo.attach(io: open(gurl+ 'gillicuddy.jpg'),
filename: 'gillicuddy.jpg')

g.banner.attach(io: open(gurl+'banner.png'), filename: 'banner.png')

g.save!

pgurl = gurl + 'plays_guitar/'
pg = Album.new(band_id: g.id, name: "...Plays Guitar")

pg.photo.attach(io: open(pgurl+ 'Gillicuddy_-_Plays_Guitar_-_20170725111157817.jpg'),
filename: 'Gillicuddy_-_Plays_Guitar_-_20170725111157817.jpg')

pg.save!

jup = Song.new(album_id: pg.id, name: "Jupiter the Blue", track_number: 1)
jup.audio_file.attach(io: open(pgurl+'Gillicuddy_-_01_-_Jupiter_the_Blue.mp3'),
filename: 'Gillicuddy_-_01_-_Jupiter_the_Blue.mp3')

jup.save!

tmuc = Song.new(album_id: pg.id, name: "Traveling Made-up Continents", track_number: 2)
tmuc.audio_file.attach(io: open(pgurl+'Gillicuddy_-_02_-_Travelling_Made-up_Continents.mp3'),
filename: 'Gillicuddy_-_02_-_Travelling_Made-up_Continents.mp3')

tmuc.save!

pony = Song.new( album_id: pg.id, name: 'Pony', track_number: 3)
pony.audio_file.attach(io: open(pgurl+'Gillicuddy_-_03_-_Pony.mp3'),
filename: 'Gillicuddy_-_03_-_Pony.mp3')

pony.save!

itch = Song.new(album_id: pg.id, name: "The Everlasting Itch for Things Remote", track_number:4)
itch.audio_file.attach(io: open(pgurl+'Gillicuddy_-_04_-_The_Everlasting_Itch_for_Things_Remote.mp3'),
filename: 'Gillicuddy_-_04_-_The_Everlasting_Itch_for_Things_Remote.mp3')

itch.save!

springish = Song.new(album_id: pg.id, name: "Springish", track_number: 5)
springish.audio_file.attach(io: open(pgurl+'Gillicuddy_-_05_-_Springish.mp3'),
filename: 'Gillicuddy_-_05_-_Springish.mp3')

springish.save!

thinking = Song.new(album_id: pg.id, name: "Thinking of You", track_number: 6)
thinking.audio_file.attach(io: open(pgurl+'Gillicuddy_-_06_-_Thinking_of_You.mp3'),
filename: 'Gillicuddy_-_06_-_Thinking_of_You.mp3')
thinking.save!

garden = Song.new(album_id: pg.id, name: "A Garden and a Library", track_number: 7)
garden.audio_file.attach(io: open( pgurl+'Gillicuddy_-_07_-_A_Garden_and_a_Library.mp3'),
filename: 'Gillicuddy_-_07_-_A_Garden_and_a_Library.mp3')
garden.save!

pgaurl = gurl + 'plays_guitar_again/'
pga = Album.new(band_id: g.id, name: "...Plays Guitar Again")

pga.photo.attach(io: open(pgaurl+'Gillicuddy_-_Plays_Guitar_Again.jpg'),
filename: 'Gillicuddy_-_Plays_Guitar_Again.jpg')

pga.save!

ad = Song.new(album_id: pga.id, name: "Adventure Darling", track_number: 1)

ad.audio_file.attach(io: open(pgaurl+'Gillicuddy_-_01_-_Adventure_Darling.mp3'),
filename: 'Gillicuddy_-_01_-_Adventure_Darling.mp3')

ad.save!

porth = Song.new(album_id: pga.id, name: "Porthglaze Cove", track_number: 2)
porth.audio_file.attach(io: open(pgaurl+'Gillicuddy_-_02_-_Porthglaze_Cove.mp3'),
filename: 'Gillicuddy_-_02_-_Porthglaze_Cove.mp3')

porth.save!

instru = Song.new(album_id: pga.id, name: "Instrumental 2 Revisited", track_number: 3)
instru.audio_file.attach(io: open(pgaurl+'Gillicuddy_-_03_-_Instrumental_2_Revisited.mp3'),
filename: 'Gillicuddy_-_03_-_Instrumental_2_Revisited.mp3')

instru.save!

mult = Song.new(album_id: pga.id, name: "Multitudes", track_number: 4)
mult.audio_file.attach(io: open(pgaurl+ 'Gillicuddy_-_04_-_Multitudes.mp3'),
filename: 'Gillicuddy_-_04_-_Multitudes.mp3')
mult.save!

fac = Song.new(album_id: pga.id, name: "Ferns and Cork", track_number: 5)
fac.audio_file.attach(io: open(pgaurl+'Gillicuddy_-_05_-_Ferns_and_Cork.mp3'),
filename: 'Gillicuddy_-_05_-_Ferns_and_Cork.mp3')
fac.save!





fandangourl = url2+'the_freak_fandango_orchestra/'

fandango = User.new(username: "freak_fandango_orchestra",
  band_name: "The Freak Fandango Orchestra",
  email: "ffo@gmail.com",
  password: "pass123")

fandango.banner.attach(io: open(fandangourl+'banner.png'), filename: 'fandango_banner.png')

fandango.photo.attach(io: open(fandangourl+'The_Freak_Fandango_Orchestra.jpg'),
filename: 'The_Freak_Fandango_Orchestra.jpg')

fandango.save!

dfurl = fandangourl + 'tales_of_a_dead_fish/'
deadfish = Album.new(band_id: fandango.id, name: "Tales Of A Dead Fish")

deadfish.photo.attach(io: open(dfurl+'The_Freak_Fandango_Orchestra_-_Tales_Of_A_Dead_Fish_-_2012020325233354.jpg'),
filename: 'The_Freak_Fandango_Orchestra_-_Tales_Of_A_Dead_Fish_-_2012020325233354.jpg')

deadfish.save!

reqfish = Song.new(album_id: deadfish.id, name: "Requiem for a Fish", track_number: 1)

reqfish.audio_file.attach(io: open(dfurl+'The_Freak_Fandango_Orchestra_-_01_-_Requiem_for_a_Fish.mp3'),
filename: 'The_Freak_Fandango_Orchestra_-_01_-_Requiem_for_a_Fish.mp3')

reqfish.save!

lateas = Song.new(album_id: deadfish.id, name: "Late As Usual", track_number: 2)
lateas.audio_file.attach(io: open(dfurl+'The_Freak_Fandango_Orchestra_-_02_-_Late_as_Usual.mp3'),
filename: 'The_Freak_Fandango_Orchestra_-_02_-_Late_as_Usual.mp3')

lateas.save!

balk = Song.new(album_id: deadfish.id, name: "Balkan Beats", track_number: 3)
balk.audio_file.attach(io: open(dfurl+'The_Freak_Fandango_Orchestra_-_03_-_Balkan_Beats.mp3'),
filename: 'The_Freak_Fandango_Orchestra_-_03_-_Balkan_Beats.mp3')

balk.save!

nomeans = Song.new(album_id: deadfish.id, name: "No Means No", track_number: 4)

nomeans.audio_file.attach(io: open(dfurl+'The_Freak_Fandango_Orchestra_-_04_-_No_means_no.mp3'),
filename: 'The_Freak_Fandango_Orchestra_-_04_-_No_means_no.mp3')

nomeans.save!

hitmans = Song.new(album_id: deadfish.id, name: "Hitman's Lovesong feat. Paola Graziano", track_number: 5)
hitmans.audio_file.attach(io: open(dfurl+'The_Freak_Fandango_Orchestra_-_05_-_Hitmans_Lovesong_feat_Paola_Graziano.mp3'),
filename: 'The_Freak_Fandango_Orchestra_-_05_-_Hitmans_Lovesong_feat_Paola_Graziano.mp3')

hitmans.save!

atb = Song.new(album_id: deadfish.id, name: "At the Beginning", track_number: 6)
atb.audio_file.attach(io: open(dfurl+'The_Freak_Fandango_Orchestra_-_06_-_At_the_beginning.mp3'),
filename: 'The_Freak_Fandango_Orchestra_-_06_-_At_the_beginning.mp3')

atb.save!


jurl = url2+'jahzzar/'

j = User.new(username: "jahzzar",
band_name: "Jahzzar",
email: "jahzzar@gmail.com",
password: "pass123")

j.banner.attach(io: open(jurl+'banner.png'), filename:
"jahzzar_banner.png")

j.photo.attach(io: open(jurl+'jahzzar.jpg'),
filename: 'jahzzar.jpg')

j.save!

come_url = jurl+'come/'
come = Album.new(band_id: j.id, name: "Come")

come.photo.attach(io: open(come_url+'Jahzzar_-_Come.jpg'),
filename: 'Jahzzar_-_Come.jpg')

come.save!

yest = Song.new(album_id: come.id, name: "yesterday", track_number: 1)

yest.audio_file.attach(io: open(come_url+'Jahzzar_-_01_-_yesterday.mp3'),
filename: 'Jahzzar_-_01_-_yesterday.mp3')

yest.save!

sappy = Song.new(album_id: come.id, name: "sappy", track_number: 2)

sappy.audio_file.attach(io: open(come_url + 'Jahzzar_-_02_-_sappy.mp3'),
filename: 'Jahzzar_-_02_-_sappy.mp3')

sappy.save!

schmaltz = Song.new(album_id: come.id, name: "schmaltz", track_number: 3)

schmaltz.audio_file.attach(io: open(come_url+ 'Jahzzar_-_03_-_schmaltz.mp3'),
filename: 'Jahzzar_-_03_-_schmaltz.mp3')

schmaltz.save!

leith = Song.new(album_id: come.id, name: "leith walk", track_number: 4)

leith.audio_file.attach(io: open( come_url+'Jahzzar_-_04_-_leith_walk.mp3'),
filename: 'Jahzzar_-_04_-_leith_walk.mp3')

leith.save!

kintsugi = Song.new(album_id: come.id, name: "kintsugi", track_number: 5)

kintsugi.audio_file.attach(io: open(come_url+'Jahzzar_-_05_-_kintsugi.mp3'),
filename: 'Jahzzar_-_05_-_kintsugi.mp3')

kintsugi.save!

charity = Song.new(album_id: come.id, name: "charity", track_number: 6)

charity.audio_file.attach(io: open(come_url+'Jahzzar_-_06_-_charity.mp3'),
filename: 'Jahzzar_-_06_-_charity.mp3')

charity.save!

tg_url = jurl + 'travellers/'
tg = Album.new(band_id: j.id, name: "Traveler's Guide")

tg.photo.attach(io: open(tg_url+'Jahzzar_-_Travellers_Guide.jpg'),
filename: 'Jahzzar_-_Travellers_Guide.jpg')

tg.save!

oos = Song.new(album_id: tg.id, name: "Out of School", track_number: 1)
oos.audio_file.attach(io: open(tg_url + 'Jahzzar_-_01_-_Out_of_School.mp3'),
filename: 'Jahzzar_-_01_-_Out_of_School.mp3')

oos.save!

fm = Song.new(album_id: tg.id, name: "FM")

fm.audio_file.attach(io: open(tg_url+'Jahzzar_-_02_-_FM.mp3'),
filename: 'Jahzzar_-_02_-_FM.mp3')

fm.save!

fireworks = Song.new(album_id: tg.id, name: "Fireworks", track_number: 3)

fireworks.audio_file.attach(io: open(tg_url+'Jahzzar_-_03_-_Fireworks.mp3'),
filename: 'Jahzzar_-_03_-_Fireworks.mp3')

fireworks.save!

storyteller = Song.new(album_id: tg.id, name: "Storyteller", track_number: 4)
storyteller.audio_file.attach(io: open(tg_url+'Jahzzar_-_04_-_Storyteller.mp3'),
filename: 'Jahzzar_-_04_-_Storyteller.mp3')

storyteller.save!

siesta = Song.new(album_id: tg.id, name: "Siesta", track_number: 5)

siesta.audio_file.attach(io: open(tg_url+'Jahzzar_-_05_-_Siesta.mp3'),
filename: 'Jahzzar_-_05_-_Siesta.mp3')

siesta.save!

echoes = Song.new(album_id: tg.id, name: 'Echoes', track_number: 6)

echoes.audio_file.attach(io: open(tg_url+'Jahzzar_-_06_-_Echoes.mp3'),
filename: 'Jahzzar_-_06_-_Echoes.mp3')

echoes.save!

wu_url = jurl+'wake_up/'

wu = Album.new(band_id: j.id, name: "Wake Up")

wu.photo.attach(io: open(wu_url+'Jahzzar_-_Wake_Up.jpg'),
filename: 'Jahzzar_-_Wake_Up.jpg')

wu.save!

dv = Song.new(album_id: wu.id, name: "Deja Vu", track_number: 1)

dv.audio_file.attach(io: open(wu_url+'Jahzzar_-_01_-_Deja_V.mp3'),
filename: 'Jahzzar_-_01_-_Deja_V.mp3')

dv.save!

vhs = Song.new(album_id: wu.id, name: "VHS", track_number: 2)
vhs.audio_file.attach(io: open(wu_url+'Jahzzar_-_02_-_VHS.mp3'),
filename: 'Jahzzar_-_02_-_VHS.mp3')

vhs.save!

hb = Song.new(album_id: wu.id, name: "Heartbreaker", track_number: 3)
hb.audio_file.attach(io: open(wu_url+'Jahzzar_-_03_-_Heartbreaker.mp3'),
filename: 'Jahzzar_-_03_-_Heartbreaker.mp3')

hb.save!

roller = Song.new(album_id: wu.id, name: "Roller-skate", track_number: 4)
roller.audio_file.attach(io: open(wu_url+'Jahzzar_-_04_-_Roller-skate.mp3'),
filename: 'Jahzzar_-_04_-_Roller-skate.mp3')

roller.save!

stars = Song.new(album_id: wu.id, name: "Stars", track_number: 5)
stars.audio_file.attach(io: open(wu_url+'Jahzzar_-_05_-_Stars.mp3'),
filename: 'Jahzzar_-_05_-_Stars.mp3')

stars.save!

pa_url = url2 + 'the_polish_ambassador/'

pa = User.new(username: "polish_ambad",
  band_name: "The Polish Ambassador",
  email: "thepolishambassador@gmail.com",
  password: "pass123",
background_color: 'black')

  pa.photo.attach(io: open(pa_url+'polish_ambassador.jpg'),
filename: 'polish_ambassador.jpg')

pa.banner.attach(io: open(pa_url+'banner.png'),
filename: 'polish_ambassador_banner.png')

pa.save!

pttp_url = pa_url + 'pushing_through_the_pavement/'
pttp = Album.new(band_id: pa.id, name: "Pushing Through The Pavement")
pttp.photo.attach(io: open(pttp_url+'The_Polish_Ambassador_-_Pushing_Through_The_Pavement_-_20140614151336777.jpg'),
filename: 'pushing_through_the_pavement.jpg')

pttp.save!
visfib = Song.new(album_id: pttp.id, name: "Vision Fiberoptics ft. Sean Haefeli", track_number: 1)

visfib.audio_file.attach(io: open(pttp_url+'The_Polish_Ambassador_-_01_-_Vision_Fiberoptics_ft_Sean_Haefeli.mp3'),
filename: "vision_fiberoptics.mp3")
visfib.save!



ltrj = Song.new(album_id: pttp.id, name: "Let the Rhythm Just ft. Mr. Lif & Ayla Nero.mp3", track_number: 2)
ltrj.audio_file.attach(io: open(pttp_url+'The_Polish_Ambassador_-_02_-_Let_the_Rhythm_Just_ft_Mr_Lif__Ayla_Nereo.mp3'),
filename: 'The_Polish_Ambassador_-_02_-_Let_the_Rhythm_Just_ft_Mr_Lif__Ayla_Nereo.mp3')

ltrj.save!


pftr = Song.new(album_id: pttp.id, name: "Prayer for the Rain", track_number: 3)
pftr.audio_file.attach(io: open(pttp_url+'The_Polish_Ambassador_-_03_-_Prayer_For_Rain_ft_Ryan_Herr__Lizzy_Plotkin.mp3'),
filename: 'The_Polish_Ambassador_-_03_-_Prayer_For_Rain_ft_Ryan_Herr__Lizzy_Plotkin.mp3')

pftr.save!

gott = Song.new(album_id: pttp.id, name: "Gathering of the Tribes", track_number: 4)
gott.audio_file.attach(io: open(pttp_url+'The_Polish_Ambassador_-_04_-_Gathering_of_the_Tribes_ft_Saqi.mp3'),
filename: 'The_Polish_Ambassador_-_04_-_Gathering_of_the_Tribes_ft_Saqi.mp3')

gott.save!

foreverlost = Song.new(album_id: pttp.id, name: "Forever Lost ft. Lafa Taylor", track_number: 5)
foreverlost.audio_file.attach(io: open(pttp_url+'The_Polish_Ambassador_-_05_-_Forever_Lost_ft_Lafa_Taylor.mp3'),
filename: 'The_Polish_Ambassador_-_05_-_Forever_Lost_ft_Lafa_Taylor.mp3')

foreverlost.save!



sri = Song.new(album_id: pttp.id, name: "Sri Gurvastakam ft. Kirtaniyas", track_number: 6)
sri.audio_file.attach(io: open(pttp_url+'The_Polish_Ambassador_-_06_-_Sri_Gurvastakam_ft_Kirtaniyas.mp3'),
filename: 'The_Polish_Ambassador_-_06_-_Sri_Gurvastakam_ft_Kirtaniyas.mp3')

sri.save!

lol_url = pa_url+ 'land_of_the_lush/'
lol = Album.new(band_id: pa.id, name: "Land  Of The Lush")
lol.photo.attach(io: open(lol_url+'The_Polish_Ambassador_-_Land_of_the_Lush.jpg'),
filename: 'The_Polish_Ambassador_-_Land_of_the_Lush.jpg')

lol.save!

lolsong = Song.new(album_id: lol.id, name: "Land of the Lush", track_number: 1)

lolsong.audio_file.attach(io: open(lol_url+'The_Polish_Ambassador__The_Diplomatic_Scandal_-_01_-_Land_of_the_Lush.mp3'),
filename: 'The_Polish_Ambassador__The_Diplomatic_Scandal_-_01_-_Land_of_the_Lush.mp3')

lolsong.save!

callofcan = Song.new(album_id: lol.id, name: "Call of the Canyon", track_number: 2)

callofcan.audio_file.attach(io: open(lol_url+'The_Polish_Ambassador__The_Diplomatic_Scandal_-_02_-_Call_of_the_Canyon.mp3'),
filename: 'The_Polish_Ambassador__The_Diplomatic_Scandal_-_02_-_Call_of_the_Canyon.mp3')

callofcan.save!

djbf = Song.new(album_id: lol.id, name: "Day's Journey By Foot", track_number: 3)
djbf.audio_file.attach(io: open(lol_url+'The_Polish_Ambassador__The_Diplomatic_Scandal_-_03_-_Days_Journey_by_Foot.mp3'),
filename: 'The_Polish_Ambassador__The_Diplomatic_Scandal_-_03_-_Days_Journey_by_Foot.mp3')

djbf.save!

  nih_url = url2 + 'nihilore/'

  nihilore = User.new(username: "nihilore",
    band_name: "Nihilore",
    email: "nihilore@gmail.com",
    password: "pass123")

  nihilore.photo.attach(io: open(nih_url+'nihilore.jpg'),
filename: 'nihilore.jpg')

nihilore.banner.attach(io: open(nih_url + 'banner.png'),
filename: 'nihilore_banner.png')

nihilore.save!

bp_url = nih_url+'broken_parts/'

bp = Album.new(band_id: nihilore.id, name: 'Broken Parts')

bp.photo.attach(io: open(bp_url+'Nihilore_-_Broken_Parts.jpg'),
filename: 'Nihilore_-_Broken_Parts.jpg')

bp.save!

sw = Song.new(album_id: bp.id, name: 'Sparkwood', track_number: 1)

sw.audio_file.attach(io: open(bp_url+'Nihilore_-_01_-_Sparkwood__21.mp3'),
filename: 'Nihilore_-_01_-_Sparkwood__21.mp3')

sw.save!

democide = Song.new(album_id: bp.id, name: 'Democide', track_number: 2)
democide.audio_file.attach(io: open(bp_url+'Nihilore_-_02_-_Democide.mp3'),
filename: 'Nihilore_-_02_-_Democide.mp3')

democide.save!

ww = Song.new(album_id: bp.id, name: "The Water and the Well", track_number: 3)
ww.audio_file.attach(io: open(bp_url+'Nihilore_-_03_-_The_Water_and_the_Well.mp3'),
filename: 'Nihilore_-_03_-_The_Water_and_the_Well.mp3')

ww.save!

otherside = Song.new(album_id: bp.id, name: "The Other Side", track_number: 4)
otherside.audio_file.attach(io: open(bp_url + 'Nihilore_-_04_-_The_Other_Side.mp3'),
filename: 'Nihilore_-_04_-_The_Other_Side.mp3')

otherside.save!




url1 = 'https://bandvamp-seeds.s3-us-west-1.amazonaws.com/music/'
placeholder = File.open('app/assets/images/parallel_cropped.png')
stones_pic = File.open('app/assets/images/stone-wheels.jpg')
homeworld_cover = open(url1+'Arthur+Vyncke/homeworld.jpg')
shapely_fluctuation_cover =open(url1+'Punch+Deck/shapely.jpg')
lumbering_pseudo_vamps_cover = open(url1+'Nakarada/Lumbering+pseudo+vamps.jpg')
scandos_journey_cover=open(url1+'Nakarada/scando/scando.jpg')
scando_theme = open(url1+'Nakarada/scando/alexander-nakarada-scandos-theme.mp3')
unsafe = open(url1+'Nakarada/scando/alexander-nakarada-unsafe-roads.mp3')
blood_eagle = open(url1+'Nakarada/scando/alexander-nakarada-blood-eagle.mp3')
reborn = open(url1+'Nakarada/scando/alexander-nakarada-reborn.mp3')
pseudo = open(url1+'Nakarada/alexander-nakarada-pseudo.mp3')
lumberer = open(url1+'Nakarada/alexander-nakarada-jack-the-lumberer.mp3')
homeworld_collapse = open(url1+'Arthur+Vyncke/arthur-vyncke-homeworld-collapse.mp3')
one_more_time = open(url1+'Arthur+Vyncke/arthur-vyncke-one-more-time.mp3')
turning_the_fight = open(url1+'Arthur+Vyncke/arthur-vyncke-turning-the-fight-around.mp3')


rob = User.new(
  username: "rob",
  email: "rob@yahoo.com",
  password: "pass123",
)
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
  name: "Scando's Theme", track_number: 1
)
scando_song.audio_file.attach(io: scando_theme, filename: "scando.mp3")
scandos.save!

unsafe_song = Song.new(
  album_id: scandos.id,
  name: "Unsafe Roads", track_number: 2
)
unsafe_song.audio_file.attach(io: unsafe, filename: "unsafe.mp3")
unsafe_song.save!

be_song = Song.new(
  album_id: scandos.id,
  name: "Blood Eagle", track_number: 3
)

be_song.audio_file.attach(io: blood_eagle, filename: "blood_eagle.mp3")
be_song.save!

reborn_song = Song.new(
  album_id: scandos.id,
  name: "Reborn", track_number: 4
)

reborn_song.audio_file.attach(io: reborn, filename: "reborn.mp3")
reborn_song.save!

lumberer_song = Song.new(
  album_id: lumbering.id,
  name: "Jack the Lumberer", track_number: 1
)

lumberer_song.audio_file.attach(io: lumberer, filename: "lumberer.mp3")
lumberer_song.save!

pseudo_song = Song.new(
  album_id: lumbering.id,
  name: "Pseudo", track_number: 2
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
homeworld_cover = open(url1+'Arthur+Vyncke/homeworld.jpg')
homeworld.photo.attach(io: homeworld_cover, filename: "homeworld_cover.jpg")
homeworld.save!

hc = Song.new(
  album_id: homeworld.id,
  name: "Homeworld Collapse", track_number: 1
)

hc.audio_file.attach(io: homeworld_collapse, filename: "homeworld_collapse.mp3")
hc.save!

omt = Song.new(
  album_id: homeworld.id,
  name: "One More Time", track_number: 2
)

omt.audio_file.attach(io: one_more_time, filename: "one_more_time.mp3")
omt.save!

ttf = Song.new(
  album_id: homeworld.id,
  name: "Turning The Fight Around", track_number: 3
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
  name: "Wandering the Path", track_number: 1
)
wtp.audio_file.attach(io: open(url1+'Punch+Deck/punch-deck-wandering-the-path.mp3'),
filename: 'wandering.mp3')
wtp.save!
longing = Song.new(
  album_id: shapely.id,
  name: "Longing", track_number: 2
)
longing.audio_file.attach(io: open(url1+'Punch+Deck/punch-deck-longing.mp3'),
filename: "longing.mp3")
longing.save!
wavy = Song.new(
  album_id: shapely.id,
  name: "Keep it Wavy", track_number: 3
)

wavy.audio_file.attach(io: open(url1+'Punch+Deck/punch-deck-keep-it-wavy.mp3'),
filename: "wavy.mp3")
wavy.save!
coal = Song.new(
  album_id: shapely.id,
  name: "Coalescence", track_number: 4
)

coal.audio_file.attach(io: open(url1+'Punch+Deck/punch-deck-coalescence.mp3'),
filename: 'coalescence.mp3')
coal.save!



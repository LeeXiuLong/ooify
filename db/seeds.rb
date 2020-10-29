# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all


#users
brewner = User.create({
    email: "brewner@brewner.com",
    password: "password",
    name: "Brewner",
    gender: "M",
    birthdate: "3-15-2020"
})

``
#Artists 
#how to attach profile pic
# artist_name_profile_pic = PUT URL HERE
# artist_name.profile_picture.attach(io: artist_name_profile_pic, filename: "PUT FILE NAME HERE")
pop_smoke = Artist.create({
    name: "Pop Smoke"
})
pop_smoke_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/pop_smoke.jpg")
pop_smoke.profile_picture.attach(io: pop_smoke_prof_pic, filename: "pop_smoke.jpg")


crj = Artist.create({
    name: "Carley Rae Jepsen"
})
crj_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/crj.jpg")
crj.profile_picture.attach(io: crj_prof_pic, filename: "crj.jpg")


kendrick = Artist.create({
    name: "Kendrick Lamar"
})
kendrick_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/kendrick.jpg")
kendrick.profile_picture.attach(io: kendrick_prof_pic, filename: "kendrick.jpg")



toy = Artist.create({
    name: "토이"
})
toy_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/yooheyeol.jpg")
toy.profile_picture.attach(io: toy_prof_pic, filename:"yooheyeol.jpg")



childish = Artist.create({
    name: "Childish Gambino"
})
childish_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/childish_gambino.jpg")
childish.profile_picture.attach(io: childish_prof_pic, filename:"childish_gambino.jpg")



aqua = Artist.create({
    name: "Aqua"
})
aqua_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/aqua.jpg")
aqua.profile_picture.attach(io: aqua_prof_pic, filename:"aqua.jpg")



beni = Artist.create({
    name: "BENI"
})
beni_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/beni.jpg")
beni.profile_picture.attach(io: beni_prof_pic, filename:"beni.jpg")


changmo = Artist.create({
    name: "창모"
})
changmo_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/changmo.jpg")
changmo.profile_picture.attach(io: changmo_prof_pic, filename:"changmo.jpg")



joey_badass = Artist.create({
    name: "Joey Bada$$"
})
joey_badass_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/joey_badass.jpg")
joey_badass.profile_picture.attach(io: joey_badass_prof_pic, filename:"joey_badass.jpg")



vengaboys = Artist.create({
    name: "Vengaboys"
})
vengaboys_prof_pic = open("https://ooify-dev.s3.amazonaws.com/ArtistProfilePictures/vengaboys.jpeg")
vengaboys.profile_picture.attach(io: vengaboys_prof_pic, filename:"vengaboys.jpeg")


#Albums

meet_the_woo = Album.create({
    name: "Meet the Woo",
    artist_id: pop_smoke.id,
    release_year: 2019,
    label: "Republic Records"
})
meet_the_woo_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/meet_the_woo.jpg")
meet_the_woo.album_artwork.attach(io: meet_the_woo_artwork, filename:"meet_the_woo.jpg")


meet_the_woo2 = Album.create({
    name: "Meet the Woo 2",
    artist_id: pop_smoke.id,
    release_year: 2020,
    label: "Republic Records"
})
meet_the_woo2_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/meet_the_woo_2.webp")
meet_the_woo2.album_artwork.attach(io: meet_the_woo2_artwork, filename:"meet_the_woo_2.webp")




emotion = Album.create({
    name: "Emotion",
    artist_id: crj.id,
    release_year: 2015,
    label: "Interscope Records"
})
emotion_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/Emotion.png")
emotion.album_artwork.attach(io: emotion_artwork, filename:"Emotion.png")




tpab = Album.create({
    name: "To Pimp a Butterfly",
    artist_id: kendrick.id,
    release_year: 2015,
    label: "Universal"
})
tpab_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/TPAB.jpg")
tpab.album_artwork.attach(io: tpab_artwork, filename:"TPAB.jpg")


section_80 = Album.create({
    name: "Section.80",
    artist_id: kendrick.id,
    release_year: 2015,
    label: "Universal"
}) 
section_80_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/section80.jpg")
section_80.album_artwork.attach(io: section_80_artwork, filename:"section80.jpg")

a_night_in_seoul = Album.create({
    name: "A Night In Seoul",
    artist_id: toy.id,
    release_year: 1998,
    label: "EnE Media"
})
a_night_in_seoul_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/ANightInSeoul.jpg")
a_night_in_seoul.album_artwork.attach(io: a_night_in_seoul_artwork, filename:"ANightInSeoul.jpg")


all_amerikkkan_badass = Album.create({
    name: "All Amerikkkan Bada$$",
    artist_id: joey_badass.id,
    release_year: 2017,
    label: "Cinematic Music Group"
})
all_amerikkkan_badass_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/AllAmerikkkanBada%24%24.jpg")
all_amerikkkan_badass.album_artwork.attach(io: all_amerikkkan_badass_artwork, filename:"AllAmerikkkanBada%24%24.jpg")



aqua_greatest_hits = Album.create({
    name: "Aqua's Greatest Hits",
    artist_id: aqua.id,
    release_year: 2009,
    label: "Universal Music Denmark"
})
aqua_greatest_hits_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/AquaGreatest.jpg")
aqua_greatest_hits.album_artwork.attach(io: aqua_greatest_hits_artwork, filename:"AquaGreatest.jpg")



band_single = Album.create({
    name: "Band-Single",
    artist_id: changmo.id,
    release_year: 2018,
    label: "Ambition Muzik"
})
band_single_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/BandSingle.webp")
band_single.album_artwork.attach(io: band_single_artwork, filename:"BandSingle.webp")




because_the_internet = Album.create({
    name: "Because The Internet",
    artist_id: childish.id,
    release_year: 2013,
    label: "None"
})
because_the_internet_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/BecauseTheInternet.jpg")
because_the_internet.album_artwork.attach(io: because_the_internet_artwork, filename:"BecauseTheInternet.jpg")



kauai = Album.create({
    name: "Kauai",
    artist_id: childish.id,
    release_year: 2014,
    label: "Glassnote Records"
})
kauai_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/Kauai.jpg")
kauai.album_artwork.attach(io: kauai_artwork, filename:"Kauai.jpg")



the_platinum_album = Album.create({
    name: "The Platinum Album",
    artist_id: vengaboys.id,
    release_year: 2000,
    label: "EMI"
})
the_platinum_album_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/The_Platinum_Album.jpg")
the_platinum_album.album_artwork.attach(io: the_platinum_album_artwork, filename:"The_Platinum_Album.jpg")



the_party_album = Album.create({
    name: "The Party Album",
    artist_id: vengaboys.id,
    release_year: 1999,
    label: "Violent Records/Violent Music BV"
})
the_party_album_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/ThePartyAlbum.jpg")
the_party_album.album_artwork.attach(io: the_party_album_artwork, filename:"ThePartyAlbum.jpg")




yura_yura = Album.create({
    name: "ユラユラ",
    artist_id: beni.id,
    release_year: 2010,
    label: "NAYUTAWAVE RECORDS"
})
yura_yura_artwork = open("https://ooify-dev.s3.amazonaws.com/AlbumArtwork/YuraYura.jpg")
yura_yura.album_artwork.attach(io: yura_yura_artwork, filename:"YuraYura.jpg")


#songs

welcome_to_the_party = Song.create({
    title: "Welcome to The Party",
    album_id: meet_the_woo.id,
    artist_id: pop_smoke.id,
    runtime: "3:35",
    track_number: 1,
})
welcome_to_the_party_track = open("https://ooify-dev.s3.amazonaws.com/Songs/MeetTheWoo/welcome_to_the_party.mp3")
welcome_to_the_party.track.attach(io: welcome_to_the_party_track, filename:"welcome_to_the_party.mp3")

dior = Song.create({
    title: "Dior",
    album_id: meet_the_woo.id,
    artist_id: pop_smoke.id,
    runtime: "3:36",
    track_number: 2,
})

dior_track = open("https://ooify-dev.s3.amazonaws.com/Songs/MeetTheWoo/Dior.mp3")
dior.track.attach(io: dior_track, filename:"Dior.mp3")

get_back = Song.create({
    title: "Get Back",
    album_id: meet_the_woo2.id,
    artist_id: pop_smoke.id,
    runtime: "1:48",
    track_number: 2,
})

get_back_track = open("https://ooify-dev.s3.amazonaws.com/Songs/MeetTheWoo2/GetBack.mp3")
get_back.track.attach(io: get_back_track, filename:"GetBack.mp3")

run_away_with_me = Song.create({
    title: "Run Away With Me",
    album_id: emotion.id,
    artist_id: crj.id,
    runtime: "4:11",
    track_number: 1,
})

run_away_with_me_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Emotion/Run+Away+With+Me+.mp3")
run_away_with_me.track.attach(io: run_away_with_me_track, filename:"Run+Away+With+Me+.mp3")

emotion_song = Song.create({
    title: "Emotion",
    album_id: emotion.id,
    artist_id: crj.id,
    runtime: "3:17",
    track_number: 2,
})
emotion_song_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Emotion/EMOTION+.mp3")
emotion_song.track.attach(io: emotion_song_track, filename:"EMOTION+.mp3")

kk = Song.create({
    title: "King Kunta",
    album_id: tpab.id,
    artist_id: kendrick.id,
    runtime: "3:55",
    track_number: 1,
})
kk_track = open("https://ooify-dev.s3.amazonaws.com/Songs/TPAB/King+Kunta.mp3")
kk.track.attach(io: kk_track, filename:"King+Kunta.mp3")



these_walls = Song.create({
    title: "These Walls",
    album_id: tpab.id,
    artist_id: kendrick.id,
    runtime: "5:01",
    track_number: 2,
})
these_walls_track = open("https://ooify-dev.s3.amazonaws.com/Songs/TPAB/These+Walls.mp3")
these_walls.track.attach(io: these_walls_track, filename:"These+Walls.mp3")



adhd = Song.create({
    title: "A.D.H.D",
    album_id: section_80.id,
    artist_id: kendrick.id,
    runtime: "3:36",
    track_number: 1,
})
adhd_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Section80/A.D.H.D..mp3")
adhd.track.attach(io: adhd_track, filename:"A.D.H.D..mp3")



blowmyhigh = Song.create({
    title: "Blow My High",
    album_id: section_80.id,
    artist_id: kendrick.id,
    runtime: "3:36",
    track_number: 2,
})
blowmyhigh_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Section80/Blow+My+High+.mp3")
blowmyhigh.track.attach(io: blowmyhigh_track, filename:"Blow+My+High+.mp3")



sketchbook = Song.create({
    title: "스케치북",
    album_id: a_night_in_seoul.id,
    artist_id: toy.id,
    runtime: "4:21",
    track_number: 1,
})
sketchbook_track = open("https://ooify-dev.s3.amazonaws.com/Songs/ANightInSeoul/%EC%8A%A4%EC%BC%80%EC%B9%98%EB%B6%81.mp3")
sketchbook.track.attach(io: sketchbook_track, filename:"Sketchbook.mp3")


still_beautiful = Song.create({
    title: "여전히 아름다운지",
    album_id: a_night_in_seoul.id,
    artist_id: toy.id,
    runtime: "4:16",
    track_number: 2,
})
still_beautiful_track = open("https://ooify-dev.s3.amazonaws.com/Songs/ANightInSeoul/%EC%97%AC%EC%A0%84%ED%9E%88%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4%EC%A7%80.mp3")
still_beautiful.track.attach(io: still_beautiful_track, filename:"StillBeautiful.mp3")



devastated = Song.create({
    title: "DEVASTATED",
    album_id: all_amerikkkan_badass.id,
    artist_id: joey_badass.id,
    runtime: "3:27",
    track_number: 5,
})
devastated_track = open("https://ooify-dev.s3.amazonaws.com/Songs/AllAmerikkkanBada%24%24/Joey+Bada%24%24+-+Devastated+(Official+Music+Video).mp3")
devastated.track.attach(io: devastated_track, filename:"Devastated.mp3")

temptation = Song.create({
    title: "TEMPTATION",
    album_id: all_amerikkkan_badass.id,
    artist_id: joey_badass.id,
    runtime: "4:04",
    track_number: 3,
})
temptation_track = open("https://ooify-dev.s3.amazonaws.com/Songs/AllAmerikkkanBada%24%24/TEMPTATION.mp3")
temptation.track.attach(io: temptation_track, filename:"Temptation.mp3")

around_the_world = Song.create({
    title: "Around the World",
    album_id: aqua_greatest_hits.id,
    artist_id: aqua.id,
    runtime: "3:29",
    track_number: 2,
})
around_the_world_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Aqua+Greatest+Hits/Aqua+-+Around+The+World.mp3")
around_the_world.track.attach(io: around_the_world_track, filename:"AroundTheWorld.mp3")


dr_jones = Song.create({
    title: "Dr. Jones",
    album_id: aqua_greatest_hits.id,
    artist_id: aqua.id,
    runtime: "3:23",
    track_number: 5,
})
dr_jones_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Aqua+Greatest+Hits/Dr.+Jones+-+Aqua.mp3")
dr_jones.track.attach(io: dr_jones_track, filename:"DrJones.mp3")


my_oh_my = Song.create({
    title: "My Oh My",
    album_id: aqua_greatest_hits.id,
    artist_id: aqua.id,
    runtime: "3:25",
    track_number: 3,
})
my_oh_my_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Aqua+Greatest+Hits/My+Oh+My.mp3")
my_oh_my.track.attach(io: my_oh_my_track, filename:"MyOhMy.mp3")


band = Song.create({
    title: "BAND",
    album_id: band_single.id,
    artist_id: changmo.id,
    runtime: "4:06",
    track_number: 1,
})
band_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Band-Single/%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A9+(CHANGMO)%2C+%E1%84%92%E1%85%A2%E1%84%89%E1%85%B1%E1%84%89%E1%85%B3%E1%84%8B%E1%85%AA%E1%86%AB+(Hash+Swan)%2C+%E1%84%8B%E1%85%A2%E1%84%89%E1%85%B1+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B3+(ASH+ISLAND)%2C+%E1%84%80%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AD%E1%84%8B%E1%85%B3%E1%86%AB+-+BAND.mp3")
band.track.attach(io: band_track, filename:"BAND.mp3")


telegraph_ave = Song.create({
    title: "Telegraph Ave",
    album_id: because_the_internet.id,
    artist_id: childish.id,
    runtime: "3:31",
    track_number: 7,
})
telegraph_avetrack = open("https://ooify-dev.s3.amazonaws.com/Songs/Because+The+Internet/Telegraph+Ave+(Oakland+by+Lloyd)+-+Childish+Gambino.mp3")
telegraph_ave.track.attach(io: telegraph_avetrack, filename:"TelegraphAve.mp3")


threethousand_beach = Song.create({
    title: "3005 Beach Picnic Version [Secret Track]",
    album_id: kauai.id,
    artist_id: childish.id,
    runtime: "3:46",
    track_number: 1,
})
threethousand_beach_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Kauai/Childish+Gambino+-+3005+(Beach+Picnic+Version)+%5BSecret+Track%5D.mp3")
threethousand_beach.track.attach(io: threethousand_beach_track, filename:"3005Beach.mp3")



pop_thieves = Song.create({
    title: "Pop Thieves",
    album_id: kauai.id,
    artist_id: childish.id,
    runtime: "5:09",
    track_number: 2,
})
pop_thieves_track = open("https://ooify-dev.s3.amazonaws.com/Songs/Kauai/Childish+Gambino+-+Pop+Thieves.mp3")
pop_thieves.track.attach(io: pop_thieves_track, filename:"PopThieves.mp3")



going_to_ibiza = Song.create({
    title: "We're Going to Ibiza",
    album_id: the_party_album.id,
    artist_id: vengaboys.id,
    runtime: "3:38",
    track_number: 5,
})
going_to_ibiza_track = open("https://ooify-dev.s3.amazonaws.com/Songs/The+Party+Album!/Vengaboys+-+We're+Going+to+Ibiza!.mp3")
going_to_ibiza.track.attach(io: going_to_ibiza_track, filename:"WereGoingToIbiza.mp3")



kiss_kiss = Song.create({
    title: "Kiss (When the Sun Don't Shine)",
    album_id: the_platinum_album.id,
    artist_id: vengaboys.id,
    runtime: "3:31",
    track_number: 3,
})
kiss_kiss_track = open("https://ooify-dev.s3.amazonaws.com/Songs/The+Platinum+Album/Vengaboys+-+Kiss+(When+The+Sun+Don't+Shine)+(Lyric+Video).mp3")
kiss_kiss.track.attach(io: kiss_kiss_track, filename:"KissWhenTheSunDontShine.mp3")



yura_yura = Song.create({
    title: "ユラユラ",
    album_id: yura_yura.id,
    artist_id: beni.id,
    runtime: "4:00",
    track_number: 8,
})
yura_yura_track = open("https://ooify-dev.s3.amazonaws.com/Songs/YuraYura/%E3%83%A6%E3%83%A9%E3%83%A6%E3%83%A9+-+BENI%E6%99%83%E5%8B%95%E4%B8%AD%E6%96%87%E5%AD%97%E5%B9%95.mp3")
yura_yura.track.attach(io: yura_yura_track, filename:"yurayura.mp3")

p = Playlist.create({
    name: "Carley and Pop",
    user_id: brewner.id
})

p2 = Playlist.create({
    name: "Toy and Kendrick",
    user_id: brewner.id
})

pS = PlaylistSong.create({
    playlist_id: p.id,
    song_id: get_back.id
})

pS2 = PlaylistSong.create({
    playlist_id: p.id,
    song_id: run_away_with_me.id
})

pS3 = PlaylistSong.create({
    playlist_id: p2.id,
    song_id: blowmyhigh.id
})

pS4 = PlaylistSong.create({
    playlist_id: p2.id,
    song_id: still_beautiful.id
})

















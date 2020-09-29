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

















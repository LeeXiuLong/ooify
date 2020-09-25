# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create({
    email: "brewner@brewner.com",
    password: "password",
    name: "Brewner",
    gender: "M",
    birthdate: "3-15-2020"
})

artist = Artist.create({
    name: "Pop Smoke"
})

album = Album.create({
    name: "Meet the Woo",
    artist_id: 1,
    release_year: 2019,
    label: "Republic Records"
})
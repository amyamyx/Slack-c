# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
tofu = User.create(username: "tofu", password: "asdfjkl")
tommy = User.creare(username: "tommy", password: "asdfjkl")
chou = User.create(username: "steven_chou", password: "asdfjkl")
hong = User.create(username: "hongkong3345678", password: "asdfjkl")

team1 = Team.create(name: "Team1", creator_id: tofu.id)
team2 = Team.create(name: "Ape Acadmey", creator_id:)
team3 = Team.create(name: "")
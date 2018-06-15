# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
tofu = User.create(username: "tofu", password: "asdfjkl")
tommy = User.create(username: "tommy", password: "asdfjkl")
chou = User.create(username: "steven_chou", password: "asdfjkl")
hong = User.create(username: "hongkong3345678", password: "asdfjkl")
sassy= User.create(username: "sassypigeon", password: "qweruiop")
david = User.create(username: "davidbh", password: "beckham")
victor = User.create(username: "victoria", password: "beckham")
sebas = User.create(username: "sebastian", password: "asdfjkl")
karen = User.create(username: "karen337", password: "asdfjkl")
harry = User.create(username: "harry", password: "qwerasdf")
tiff = User.create(username: "tiff", password: "asdfjkl")
jason = User.create(username: "jasonjson", password: "jbuilder")
jimmy = User.create(username: "jkimmel", password: "runoutoftime")
damon = User.create(username: "mdamon", password: "benisbf")
walter = User.create(username: "waltermitty", password: "majortom")
sloth = User.create(username: "flashthesloth", password: "fastest")
jess = User.create(username: "jessicachen", password: "justjessica")
face = User.create(username: "happyface123", password: "iamhappy")
branson = User.create(username: "richbranson", password: "virgin")
barb = User.create(username: "barbara999", password: "asdfjkl")
elon = User.create(username: "elonmusk", password: "teslaisdope")


team1 = Team.create(name: "Appp Academy", creator_id: tofu.id)
team2 = Team.create(name: "team2", creator_id: tommy.id)

general = Channel.where(team_id: team1.id).find_by(name: "general")

(2...21).each do |id|
  ChannelMembership.create(channel_id: 1, user_id: id)
end

channel1 = Channel.create(name: "leads", team_id: team1.id, creator_id: tofu.id)
channel2 = Channel.create(name: "marketing", team_id: team1.id, creator_id: chou.id)
channel3 = Channel.create(name: "engineering", team_id: team1.id, creator_id: chou.id)
channel4 = Channel.create(name: "diversity", team_id: team1.id, creator_id: hong.id)
channel5 = Channel.create(name: "public-relation", team_id: team1.id, creator_id: tofu.id)

ChannelMembership.create(channel_id: channel1.id, user_id: tommy.id)
ChannelMembership.create(channel_id: channel1.id, user_id: david.id)
ChannelMembership.create(channel_id: channel1.id, user_id: harry.id)
ChannelMembership.create(channel_id: channel1.id, user_id: face.id)
ChannelMembership.create(channel_id: channel1.id, user_id: victor.id)
ChannelMembership.create(channel_id: channel1.id, user_id: barb.id)
ChannelMembership.create(channel_id: channel1.id, user_id: tiff.id)
ChannelMembership.create(channel_id: channel1.id, user_id: sebas.id)

ChannelMembership.create(channel_id: channel2.id, user_id: tofu.id)
ChannelMembership.create(channel_id: channel2.id, user_id: harry.id)
ChannelMembership.create(channel_id: channel2.id, user_id: victor.id)
ChannelMembership.create(channel_id: channel3.id, user_id: barb.id)
ChannelMembership.create(channel_id: channel3.id, user_id: jess.id)
ChannelMembership.create(channel_id: channel3.id, user_id: sloth.id)
ChannelMembership.create(channel_id: channel3.id, user_id: tiff.id)

ChannelMembership.create(channel_id: channel4.id, user_id: tofu.id)
ChannelMembership.create(channel_id: channel4.id, user_id: sassy.id)
ChannelMembership.create(channel_id: channel4.id, user_id: jimmy.id)
ChannelMembership.create(channel_id: channel4.id, user_id: damon.id)

direct1 = Direct.create(team_id: 1)
direct2 = Direct.create(team_id: 1)
direct3 = Direct.create(team_id: 1)
direct4 = Direct.create(team_id: 1)
direct5 = Direct.create(team_id: 1)
direct6 = Direct.create(team_id: 1)

DirectMembership.create(direct_id: direct1.id, user_id: tommy.id)
DirectMembership.create(direct_id: direct1.id, user_id: tofu.id)

DirectMembership.create(direct_id: direct2.id, user_id: tommy.id)
DirectMembership.create(direct_id: direct2.id, user_id: tofu.id)
DirectMembership.create(direct_id: direct2.id, user_id: jess.id)
DirectMembership.create(direct_id: direct2.id, user_id: jason.id)

DirectMembership.create(direct_id: direct3.id, user_id: elon.id)
DirectMembership.create(direct_id: direct3.id, user_id: branson.id)
DirectMembership.create(direct_id: direct3.id, user_id: victor.id)
DirectMembership.create(direct_id: direct3.id, user_id: tommy.id)

DirectMembership.create(direct_id: direct4.id, user_id: tommy.id)
DirectMembership.create(direct_id: direct4.id, user_id: david.id)

DirectMembership.create(direct_id: direct5.id, user_id: tommy.id)
DirectMembership.create(direct_id: direct5.id, user_id: barb.id)

DirectMembership.create(direct_id: direct6.id, user_id: tiff.id)
DirectMembership.create(direct_id: direct6.id, user_id: tofu.id)

Message.create(messageable_type: "Channel", messageable_id: general.id, user_id: tofu.id, content: "Hello, welcome to our team! I am the administrator of this channel.")
Message.create(messageable_type: "Channel", messageable_id: general.id, user_id: chou.id, content: "Hi, everyone! I am Steven Chou.I am in the Marketing department. Please contact me or post in the #marketing channel if having marketing-related ideas")
Message.create(messageable_type: "Channel", messageable_id: general.id, user_id: elon.id, content: "Greetings.")
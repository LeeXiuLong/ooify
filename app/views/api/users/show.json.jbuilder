json.partial! "api/users/user", user:@user
# json.playlists @user.playlists do |playlist|
#     json.set!(playlist.id) do
#         json.extract! playlist, 
#     end
# end
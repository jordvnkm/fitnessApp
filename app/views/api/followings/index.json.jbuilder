if @followings
  json.followings_as_user @followings, partial: '/api/followings/following', as: :following
end

if @followings_as_fan
  json.followings_as_fan @followings_as_fan, partial: '/api/followings/following', as: :following
end

json.extract! user, :username, :id, :email, :profile_img_url
json.follower_count user.followings_as_user.length
json.home_location user.home_location

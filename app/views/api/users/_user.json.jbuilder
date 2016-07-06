json.extract! user, :username, :id, :profile_img_url, :email
json.follower_count user.followers.length

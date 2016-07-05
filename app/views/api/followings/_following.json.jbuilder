# json.extract! following, :user, :fan, :id
json.user following.user, :id, :follower_count, :username, :email
json.fan following.fan, :id, :follower_count, :username, :email
json.id following.id

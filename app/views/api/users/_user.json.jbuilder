favorite_ids = []

user.favorite_routes.each do |route|
  favorite_ids.push(route.id)
end

completed_ids = []
user.completed_routes.each do |route|
  completed_ids.push(route.id)
end

json.favorites favorite_ids
json.completed completed_ids

json.extract! user, :username, :id, :profile_img_url

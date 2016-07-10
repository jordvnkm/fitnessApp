json.(route, :id, :name, :notes, :created_at)
json.author route.author
json.location route.location.name

mywaypoints = route.waypoints.sort_by do |waypoint|
  waypoint[:order]
end
json.waypoints mywaypoints
json.favorite_count route.favorites.length

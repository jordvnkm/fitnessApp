json.(route, :id, :name)
json.author route.author.username
json.location route.location.name

mywaypoints = route.waypoints.sort_by do |waypoint|
  waypoint[:order]
end
json.waypoints mywaypoints

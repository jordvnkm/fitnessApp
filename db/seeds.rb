# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users
guest = Api::User.new(username: "guest", password: "password",
                      email: "guest@guest.com")

user1 = Api::User.new(username: "user1", password: "password", email: "user1@gmail.com")
user2 = Api::User.new(username: "user2", password: "password", email: "user2@gmail.com")

guest.save!
user1.save!
user2.save!

# Routes
route1 = Api::Route.create(author_id: 1, name: "route1", location_id: 1)
route2 = Api::Route.create(author_id: 2, name: "route2", location_id: 1)
route3 = Api::Route.create(author_id: 3, name: "route3", location_id: 1)

# locations
location1 =  Api::Location.create(name: "San Francisco", center_lat: 37.759036, center_lng: -122.449619)
location2 = Api::Location.create(name: "Los Angeles", center_lat: 34.067974, center_lng: -118.340362)

# waypoints for ROUTE 1
waypoint1 = Api::Waypoint.create(lat: 37.788687, lng: -122.420328, route_id: 1, order: 0)
waypoint2 = Api::Waypoint.create(lat: 37.789637, lng: -122.413033, route_id: 1, order: 1)
waypoint3 = Api::Waypoint.create(lat: 37.785499, lng: -122.411273, route_id: 1, order: 2)
waypoint4 = Api::Waypoint.create(lat: 37.780378, lng: -122.407969, route_id: 1, order: 3)

# waypoints for Route 2
waypoint5 = Api::Waypoint.create(lat: 37.764671, lng: -122.496117, route_id: 2, order: 0)
waypoint6 = Api::Waypoint.create(lat: 37.765452, lng: -122.493499, route_id: 2, order: 1)
waypoint7 = Api::Waypoint.create(lat: 37.766673, lng: -122.484229, route_id: 2, order: 2)
waypoint8 = Api::Waypoint.create(lat: 37.765935, lng: -122.478232, route_id: 2, order: 3)
waypoint9 = Api::Waypoint.create(lat: 37.770439, lng: -122.479885, route_id: 2, order: 4)

# waypoints for Route 3
waypoint10 = Api::Waypoint.create(lat: 37.757662, lng: -122.443037, route_id: 3, order: 0)
waypoint11 = Api::Waypoint.create(lat: 37.751555, lng: -122.442919, route_id: 3, order: 1)
waypoint12 = Api::Waypoint.create(lat: 37.751844, lng: -122.438595, route_id: 3, order: 2)
waypoint13 = Api::Waypoint.create(lat: 37.754276, lng: -122.438778, route_id: 3, order: 3)


# favorites
favorite1 = Api::Favorite.create(user_id: 1, route_id: 2)

# completed routes
date1 = Date.parse('18-12-2015')
completed1 = Api::CompletedRoute.create(date: date1, route_id: 3, user_id: 1)

# comments for user id 1
comment1 = Api::Comment.create(author_id: 1, content: "hello from comment1", route_id: 1)
comment2 = Api::Comment.create(author_id: 1, content: "hello from comment2", route_id: 2)
comment3 = Api::Comment.create(author_id: 1, content: "hello from comment3", route_id: 3)

# comments for user id 2
comment4 = Api::Comment.create(author_id: 2, content: "hello from comment4", route_id: 1)
comment5 = Api::Comment.create(author_id: 2, content: "hello from comment5", route_id: 2)
comment6 = Api::Comment.create(author_id: 2, content: "hello from comment6", route_id: 3)
comment7 = Api::Comment.create(author_id: 2, content: "hello from comment7", route_id: 1)
comment8 = Api::Comment.create(author_id: 2, content: "hello from comment8", route_id: 2)
comment9 = Api::Comment.create(author_id: 2, content: "hello from comment9", route_id: 3)

# comments for user 3
comment10 = Api::Comment.create(author_id: 3, content: "hello from comment10", route_id: 1)
comment11 = Api::Comment.create(author_id: 3, content: "hello from comment11", route_id: 2)
comment12 = Api::Comment.create(author_id: 3, content: "hello from comment12", route_id: 3)
comment13 = Api::Comment.create(author_id: 3, content: "hello from comment13", route_id: 1)


follows1 = Api::Following.create(user_id: 1, fan_id: 2)
follows2 = Api::Following.create(user_id: 1, fan_id: 3)
follows3 = Api::Following.create(user_id: 2, fan_id: 1)
follows4 = Api::Following.create(user_id: 3, fan_id: 1)

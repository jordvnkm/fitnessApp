# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users
guest = Api::User.new(username: "Guest", password: "password",
                      email: "guest@guest.com", home_location_id: 1)

user1 = Api::User.new(username: "user1", password: "password", email: "user1@gmail.com", home_location_id: 1)
user2 = Api::User.new(username: "user2", password: "password", email: "user2@gmail.com", home_location_id: 1)

guest.save!
user1.save!
user2.save!

# Routes
route1 = Api::Route.create(author_id: 1, name: "route1", location_id: 1)
route2 = Api::Route.create(author_id: 2, name: "route2", location_id: 1)
route3 = Api::Route.create(author_id: 3, name: "route3", location_id: 1)

# locations
location1 =  Api::Location.create(name: "San Francisco, CA", center_lat: 37.759036, center_lng: -122.449619)
location2 = Api::Location.create(name: "Los Angeles, CA", center_lat: 34.067974, center_lng: -118.340362)
location3 = Api::Location.create(name: "New York City, NY", center_lat: 40.725, center_lng: -73.9986)
location4 = Api::Location.create(name: "Chicago, IL", center_lat: 41.8651, center_lng: -87.6594)
location5 = Api::Location.create(name: "Houston, TX", center_lat: 29.7453, center_lng: -95.3903)
location6 = Api::Location.create(name: "Philadelphia, PA", center_lat: 39.9594, center_lng: -75.1668)
location7 = Api::Location.create(name: "Phoenix, AZ", center_lat: 33.4620, center_lng: -112.0729)
location8 = Api::Location.create(name: "San Antonia, TX", center_lat: 29.4368, center_lng: -98.4966)
location9 = Api::Location.create(name: "San Diego, CA", center_lat: 32.7284, center_lng: -117.1611)
location10 = Api::Location.create(name: "Dallas, TX", center_lat: 32.7638, center_lng: -96.8014)
location11 = Api::Location.create(name: "San Jose, CA", center_lat: 37.3313, center_lng: -121.8902)
location12 = Api::Location.create(name: "Austin, TX", center_lat: 30.2529, center_lng: -97.7493)
location13 = Api::Location.create(name: "Jacksonville, TX", center_lat: 31.96125, center_lng: -95.272)
location14 = Api::Location.create(name: "Indianapolis, IN", center_lat: 39.7623, center_lng: -86.1575)
location15 = Api::Location.create(name: "Columbus, OH", center_lat: 39.5392, center_lng: -83.0052)
location16 = Api::Location.create(name: "Fortworth, TX", center_lat: 32.7405, center_lng: -97.336)
location17 = Api::Location.create(name: "Charlotte, NC", center_lat: 35.2205, center_lng: -80.8426)
location18 = Api::Location.create(name: "Detroit, MI", center_lat: 42.3369, center_lng: -83.0477)
location19 = Api::Location.create(name: "EL Paso, TX", center_lat: 31.7690, center_lng: -106.484)
location20 = Api::Location.create(name: "Memphis, TN", center_lat: 35.1378, center_lng: -90.0422)
location21 = Api::Location.create(name: "Seattle, WA", center_lat: 47.6004, center_lng: -122.332)
location22 = Api::Location.create(name: "Denver, CO", center_lat: 39.7325, center_lng: -104.9903)
location23 = Api::Location.create(name: "Washington, DC", center_lat: 38.9014, center_lng: -77.03517)
location24 = Api::Location.create(name: "Nashville, TN", center_lat: 36.1763, center_lng: -86.7852)
location25 = Api::Location.create(name: "Baltimore, MD", center_lat: 39.2939, center_lng: -76.6146)
location26 = Api::Location.create(name: "Louisville, KY", center_lat: 38.2413, center_lng: -85.7592)
location27 = Api::Location.create(name: "Portland, OR", center_lat: 45.5178, center_lng: -122.6778)
location28 = Api::Location.create(name: "Oklahoma City, OK", center_lat: 35.451, center_lng: -97.5163)
location29 = Api::Location.create(name: "Milwaukee, WI", center_lat: 43.0332, center_lng: -87.9056)
location30 = Api::Location.create(name: "Las Vegas, NV", center_lat: 36.1632, center_lng: -115.1414)
location31 = Api::Location.create(name: "Albuquerque, NM", center_lat: 35.0078, center_lng: -106.607)
location32 = Api::Location.create(name: "Tucson, AZ", center_lat: 32.2157, center_lng: -110.9264)
location33 = Api::Location.create(name: "Fresno, CA", center_lat: 36.74034, center_lng: -119.7726)
location34 = Api::Location.create(name: "Sacramento, CA", center_lat: 38.5754, center_lng: -121.4978)
location35 = Api::Location.create(name: "Long Beach, CA", center_lat: 33.7776, center_lng: -118.1849)
location36 = Api::Location.create(name: "Kansas City, MO", center_lat: 39.0873, center_lng: -94.58125)
location37 = Api::Location.create(name: "Mesa, AZ", center_lat: 33.4086, center_lng: -111.83115)
location38 = Api::Location.create(name: "Virginia Beach, VA", center_lat: 36.8426, center_lng: -75.9811)
location39 = Api::Location.create(name: "Atlanta, GA", center_lat: 33.7419, center_lng: -84.3897)
location40 = Api::Location.create(name: "Colorado Springs, CO", center_lat: 38.82212, center_lng: -104.8194)
location41 = Api::Location.create(name: "Raleigh, NC", center_lat: 35.7735, center_lng: -78.6375)
location42 = Api::Location.create(name: "Omaha, NE", center_lat: 41.24739, center_lng: -95.9975)
location43 = Api::Location.create(name: "Miami, FL", center_lat: 25.7579, center_lng: -80.1947)
location44 = Api::Location.create(name: "Oakland, CA", center_lat: 37.79855, center_lng: -122.27035)
location45 = Api::Location.create(name: "Tulsa, OK", center_lat: 36.1431, center_lng: -95.9935)
location46 = Api::Location.create(name: "Minneapolis, MN", center_lat: 44.972, center_lng: -93.2649)
location47 = Api::Location.create(name: "Cleveland, OH", center_lat: 41.4928, center_lng: -81.6915)
location48 = Api::Location.create(name: "Wichita, KS", center_lat: 37.6815, center_lng: -97.3295)
location49 = Api::Location.create(name: "Arlington, TX", center_lat: 32.7289, center_lng: -97.1079)
location50 = Api::Location.create(name: "New Orleans, LA", center_lat: 29.9437, center_lng: -90.0755)
location51 = Api::Location.create(name: "Bakersfield, CA", center_lat: 35.3668, center_lng: -119.0187)
location52 = Api::Location.create(name: "Tampa, FL", center_lat: 27.9574, center_lng: -82.4577)
location53 = Api::Location.create(name: "Honolulu, HI", center_lat: 21.3034, center_lng: -157.8583)
location54 = Api::Location.create(name: "Anaheim, CA", center_lat: 33.8288, center_lng: -117.91546)
location55 = Api::Location.create(name: "Aurora, CO", center_lat: 39.7236, center_lng: -104.831)
location56 = Api::Location.create(name: "Santa Ana, CA", center_lat: 33.7439, center_lng: -117.8675)
location57 = Api::Location.create(name: "St. Louis, MO", center_lat: 38.68083, center_lng: -90.2016)
location58 = Api::Location.create(name: "Riverside, CA", center_lat: 33.9503, center_lng: -117.3957)
location59 = Api::Location.create(name: "Corpus Christi, TX", center_lat: 27.7848, center_lng: -97.4026)
location60 = Api::Location.create(name: "Pittsburgh, PA", center_lat: 40.4373, center_lng: -79.9956)
location61 = Api::Location.create(name: "Lexington, KY", center_lat: 38.02799, center_lng: -84.50182)
location62 = Api::Location.create(name: "Anchorage, AK", center_lat: 61.20442, center_lng: -149.89908)
location63 = Api::Location.create(name: "Stockton, CA", center_lat: 37.95459, center_lng: -122.29089)
location64 = Api::Location.create(name: "Cincinnati, OH", center_lat: 39.09683, center_lng: -84.51225)
location65 = Api::Location.create(name: "St. Paul, MN", center_lat: 44.95135, center_lng: -93.0892)
location66 = Api::Location.create(name: "Toledo, OH", center_lat: 41.660894, center_lng: -83.555)
location67 = Api::Location.create(name: "Newark, NJ", center_lat: 40.73256, center_lng: -74.17244)
location68 = Api::Location.create(name: "New Jersey", center_lat: 40.1189, center_lng: -74.3034)
location69 = Api::Location.create(name: "Greensboro, NC", center_lat: 36.06632, center_lng: -79.7915)
location70 = Api::Location.create(name: "Plano, TX", center_lat: 33.0169, center_lng: -96.69886)
location71 = Api::Location.create(name: "Henderson, TX", center_lat: 32.1516, center_lng: -94.79913)
location72 = Api::Location.create(name: "Lincoln, NE", center_lat: 40.8192, center_lng: -40.8192)
location73 = Api::Location.create(name: "Buffalo, NY", center_lat: 42.886, center_lng: -78.78708)
location74 = Api::Location.create(name: "Fort Wayne, TX", center_lat: 41.07424, center_lng: -85.13717)
location75 = Api::Location.create(name: "Jersey, NJ", center_lat: 40.7256, center_lng: -74.0076)




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

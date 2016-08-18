anc# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users
guest = Api::User.create(username: "Guest", password: "password",
                      email: "guest@guest.com", home_location_id: 62, profile_img_url: "http://www.runninginjury.co.uk/community/wp-content/uploads/2014/01/Rocky-runs-up-the-stairs-.jpg")

user1 = Api::User.create(username: "Adam Smith", password: "password1", email: "user1@gmail.com", home_location_id: 62, profile_img_url: "https://static01.nyt.com/images/2009/10/21/magazine/21physed_barefoot/blogSpan.jpg")
# user2 = Api::User.create(username: "Jon Jones", password: "password2", email: "user2@gmail.com", home_location_id: 62, profile_img_url: "http://www.craziestsportsfights.com/wp-content/uploads/2016/04/jon-jones.jpg")
user2 = Api::User.create(username: "Joe Jackson", password: "password2", email: "user2@gmail.com", home_location_id: 62, profile_img_url: "http://www.buzzle.com/images/sports/athlete-running.jpg")
user3 = Api::User.create(username: "Bob Johnson", password: "password3", email: "user3@gmail.com", home_location_id: 62, profile_img_url: "https://i.guim.co.uk/img/media/febd05d5d3553b0e0a48772c20194bd6ac5d5990/0_231_5472_3283/master/5472.jpg?w=620&q=55&auto=format&usm=12&fit=max&s=3a89e9df2667a538a7a3a46b5b6b6537")
user4 = Api::User.create(username: "Amanda Todd", password: "password4", email: "user4@gmail.com", home_location_id: 62, profile_img_url: "https://everydaylisamae.files.wordpress.com/2015/02/running.jpg")
user5 = Api::User.create(username: "Jordan Michaels", password: "password5", email: "user5@gmail.com", home_location_id: 62, profile_img_url: "http://yesofcorsa.com/wp-content/uploads/2015/08/4453_running.jpg")
user6 = Api::User.create(username: "Christina Adams", password: "password6", email: "user6@gmail.com", home_location_id: 62, profile_img_url: "http://cdn.running.competitor.com/files/2012/03/Good-Running-Form.jpg")
user7 = Api::User.create(username: "Kobe Bryant", password: "password7", email: "user7@gmail.com", home_location_id: 62, profile_img_url: "http://remezcla.com/wp-content/uploads/2016/04/kobe-bryant-lakers.jpg")
user8 = Api::User.create(username: "Megan Tanaka", password: "password8", email: "user8@gmail.com", home_location_id: 62, profile_img_url: "http://thebestrunningshoes.info/wp-content/uploads/2015/07/Top-5-Best-Running-Shoes-for-Women-in-2015.jpg")
user9 = Api::User.create(username: "John Lee", password: "password9", email: "user9@gmail.com", home_location_id: 62, profile_img_url: "http://www.active.com/Assets/Running/trail-running-6.jpg")
user10 = Api::User.create(username: "Daniel Wada", password: "password0", email: "user10@gmail.com", home_location_id: 62, profile_img_url: "http://www.greenlightapparel.com/wp-content/uploads/2012/04/running_in_the_heat500_0.jpg")
user11 = Api::User.create(username: "Jacob Lee", password: "password1", email: "user11@gmail.com", home_location_id: 62, profile_img_url: "http://pixel.nymag.com/imgs/daily/science/2016/03/24/24-running-depression.w536.h357.2x.jpg")
user12 = Api::User.create(username: "Nick Valparaiso", password: "password2", email: "user12@gmail.com", home_location_id: 62, profile_img_url: "http://www.active.com/Assets/active-family/460+x+345/drill-of-the-week-running-form-drill-for-kids.jpg")
user13 = Api::User.create(username: "Jyllian Aquilar", password: "password3", email: "user13@gmail.com", home_location_id: 62, profile_img_url: "http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/620/Long+Run+620.jpg")
user14 = Api::User.create(username: "Janisa Dedovic", password: "password4", email: "user14@gmail.com", home_location_id: 62, profile_img_url: "http://www.hercampus.com/sites/default/files/2013/09/20/o-FEMALE-RUNNING-SHOES-facebook_0.jpg")
user15 = Api::User.create(username: "Alyssa Tran", password: "password5", email: "user15@gmail.com", home_location_id: 37, profile_img_url: "http://static1.squarespace.com/static/557b65c2e4b00283cf1ca9b0/t/5585d703e4b0d4f1a8bc4dc2/1434834698106/shutterstock_139712587.jpg?format=2500w")
user16 = Api::User.create(username: "Jade Regoso", password: "password6", email: "user16@gmail.com", home_location_id: 37, profile_img_url: "https://media3.popsugar-assets.com/files/2014/12/29/749/n/1922729/3a14155bc25550a9_run-weight.xxxlarge.jpg")
user17 = Api::User.create(username: "Cameron Alex", password: "password7", email: "user17@gmail.com", home_location_id: 37, profile_img_url: "http://www.unchainedfitness.com/wordpress/wp-content/uploads/2013/07/iStock_running.jpg")
user18 = Api::User.create(username: "Zachary Cruz", password: "password8", email: "user18@gmail.com", home_location_id: 37, profile_img_url: "http://sourcefed.com/wp-content/uploads/2015/04/Kili-Run-124.jpg")
user19 = Api::User.create(username: "Marina Vu", password: "password9", email: "user19@gmail.com", home_location_id: 37, profile_img_url: "http://www.sportsrehabto.com/wp-content/uploads/2015/08/city-running.jpg")
user20 = Api::User.create(username: "Jasmine Su", password: "password0", email: "user20@gmail.com", home_location_id: 63, profile_img_url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Woman_running_barefoot_on_beach.jpg")
user21 = Api::User.create(username: "Amanda Young", password: "password1", email: "user21@gmail.com", home_location_id: 63, profile_img_url: "https://eu-a.asics.com/knowledge/5215/new_main_images/running-on-holida-gear-checllist-brand_large.jpg?1406597666")
user22 = Api::User.create(username: "Allen Salino", password: "password2", email: "user22@gmail.com", home_location_id: 59, profile_img_url: "http://www.sbs.com.au/news/sites/sbs.com.au.news/files/running.jpg")
user23 = Api::User.create(username: "Hilary Swank", password: "password3", email: "user23@gmail.com", home_location_id: 59, profile_img_url: "http://richestcelebrities.org/wp-content/uploads/2014/10/Hilary-Swank-Net-Worth.jpg")
user24 = Api::User.create(username: "Stephen Curry", password: "password4", email: "user24@gmail.com", home_location_id: 62, profile_img_url: "https://s-media-cache-ak0.pinimg.com/564x/6f/85/5f/6f855f6b82f9da6f924789063bb63a05.jpg")
user25 = Api::User.create(username: "Ben Simmons", password: "password5", email: "user25@gmail.com", home_location_id: 62, profile_img_url: "http://images.performgroup.com/di/library/omnisport/a0/58/ben-simmons-120615-usnews-getty-ftr_17loxnyhcmerv1hm62smm3ed4j.jpg?t=2016465945")
user26 = Api::User.create(username: "Serena Williams", password: "password6", email: "user26@gmail.com", home_location_id: 68, profile_img_url: "http://www.ew.com/sites/default/files/i/2015/07/11/serena-williams.jpg")
user27 = Api::User.create(username: "Joe Rogan", password: "password7", email: "user27@gmail.com", home_location_id: 49, profile_img_url: "http://assets.fightland.com/content-images/contentimage/55558/rogan650.jpg")
user28 = Api::User.create(username: "Brittany Zumie", password: "password8", email: "user28@gmail.com", home_location_id: 49, profile_img_url: "http://images.shape.mdpcdn.com/sites/shape.com/files/styles/story_detail/public/story/runninghill_0.jpg?itok=PaZHBJnw")
user29 = Api::User.create(username: "Dylan Tomita", password: "password9", email: "user29@gmail.com", home_location_id: 36, profile_img_url: "https://expertbeacon.com/sites/default/files/take_your_running_to_another_level_and_hire_a_running_coach.jpg")
user30 = Api::User.create(username: "Andrew Cole", password: "password0", email: "user30@gmail.com", home_location_id: 49, profile_img_url: "http://images.wisegeek.com/athlete-takes-off-running.jpg")
user31 = Api::User.create(username: "Jessica Cole", password: "password1", email: "user31@gmail.com", home_location_id: 36, profile_img_url: "https://media3.popsugar-assets.com/files/2012/07/28/4/192/1922729/55cba752738b2490_118387116.preview.jpg")
user32 = Api::User.create(username: "Klay Thompson", password: "password2", email: "user32@gmail.com", home_location_id: 37, profile_img_url: "http://blogs.mercurynews.com/thompson/files/2015/01/klay-on-fire.jpg")
user33 = Api::User.create(username: "David Banner", password: "password3", email: "user33@gmail.com", home_location_id: 37, profile_img_url: "http://cdn3-www.superherohype.com/assets/uploads/2013/11/hulk-feature-2.jpg")

#62 = sf
# 37 = los angeles
# 63 = san jose
# 59 = sac
# 68 = stockton
# 49 = oakland
# 36 = long beach


# Routes
route1 = Api::Route.create(author_id: 1, name: "Polk St. Route", location_id: 62)
route2 = Api::Route.create(author_id: 2, name: "Sunset to Transverse", location_id: 62)
route3 = Api::Route.create(author_id: 3, name: "Market St. Route", location_id: 62)

# locations
location1 = Api::Location.create(name: "Albuquerque, NM", center_lat: 35.0078, center_lng: -106.607)
location2 = Api::Location.create(name: "Anaheim, CA", center_lat: 33.8288, center_lng: -117.91546)
location3 = Api::Location.create(name: "Anchorage, AK", center_lat: 61.20442, center_lng: -149.89908)
location4 = Api::Location.create(name: "Arlington, TX", center_lat: 32.7289, center_lng: -97.1079)
location5 = Api::Location.create(name: "Atlanta, GA", center_lat: 33.7419, center_lng: -84.3897)
location6 = Api::Location.create(name: "Aurora, CO", center_lat: 39.7236, center_lng: -104.831)
location7 = Api::Location.create(name: "Austin, TX", center_lat: 30.2529, center_lng: -97.7493)
location8 = Api::Location.create(name: "Bakersfield, CA", center_lat: 35.3668, center_lng: -119.0187)
location9 = Api::Location.create(name: "Baltimore, MD", center_lat: 39.2939, center_lng: -76.6146)
location10 = Api::Location.create(name: "Buffalo, NY", center_lat: 42.886, center_lng: -78.78708)
location11 = Api::Location.create(name: "Charlotte, NC", center_lat: 35.2205, center_lng: -80.8426)
location12 = Api::Location.create(name: "Chicago, IL", center_lat: 41.8651, center_lng: -87.6594)
location13 = Api::Location.create(name: "Cincinnati, OH", center_lat: 39.09683, center_lng: -84.51225)
location14 = Api::Location.create(name: "Colorado Springs, CO", center_lat: 38.82212, center_lng: -104.8194)
location15 = Api::Location.create(name: "Columbus, OH", center_lat: 39.5392, center_lng: -83.0052)
location16 = Api::Location.create(name: "Corpus Christi, TX", center_lat: 27.7848, center_lng: -97.4026)
location17 = Api::Location.create(name: "Cleveland, OH", center_lat: 41.4928, center_lng: -81.6915)
location18 = Api::Location.create(name: "Dallas, TX", center_lat: 32.7638, center_lng: -96.8014)
location19 = Api::Location.create(name: "Denver, CO", center_lat: 39.7325, center_lng: -104.9903)
location20 = Api::Location.create(name: "Detroit, MI", center_lat: 42.3369, center_lng: -83.0477)
location21 = Api::Location.create(name: "EL Paso, TX", center_lat: 31.7690, center_lng: -106.484)
location22 = Api::Location.create(name: "Fort Wayne, TX", center_lat: 41.07424, center_lng: -85.13717)
location23 = Api::Location.create(name: "Fortworth, TX", center_lat: 32.7405, center_lng: -97.336)
location24 = Api::Location.create(name: "Fresno, CA", center_lat: 36.74034, center_lng: -119.7726)
location25 = Api::Location.create(name: "Greensboro, NC", center_lat: 36.06632, center_lng: -79.7915)
location26 = Api::Location.create(name: "Henderson, TX", center_lat: 32.1516, center_lng: -94.79913)
location27 = Api::Location.create(name: "Honolulu, HI", center_lat: 21.3034, center_lng: -157.8583)
location28 = Api::Location.create(name: "Houston, TX", center_lat: 29.7453, center_lng: -95.3903)
location29 = Api::Location.create(name: "Indianapolis, IN", center_lat: 39.7623, center_lng: -86.1575)
location30 = Api::Location.create(name: "Jacksonville, TX", center_lat: 31.96125, center_lng: -95.272)
location31 = Api::Location.create(name: "Jersey, NJ", center_lat: 40.7256, center_lng: -74.0076)
location32 = Api::Location.create(name: "Kansas City, MO", center_lat: 39.0873, center_lng: -94.58125)
location33 = Api::Location.create(name: "Las Vegas, NV", center_lat: 36.1632, center_lng: -115.1414)
location34 = Api::Location.create(name: "Lexington, KY", center_lat: 38.02799, center_lng: -84.50182)
location35 = Api::Location.create(name: "Lincoln, NE", center_lat: 40.8192, center_lng: -40.8192)
location36 = Api::Location.create(name: "Long Beach, CA", center_lat: 33.7776, center_lng: -118.1849)
location37 = Api::Location.create(name: "Los Angeles, CA", center_lat: 34.067974, center_lng: -118.340362)
location38 = Api::Location.create(name: "Louisville, KY", center_lat: 38.2413, center_lng: -85.7592)
location39 = Api::Location.create(name: "Memphis, TN", center_lat: 35.1378, center_lng: -90.0422)
location40 = Api::Location.create(name: "Mesa, AZ", center_lat: 33.4086, center_lng: -111.83115)
location41 = Api::Location.create(name: "Miami, FL", center_lat: 25.7579, center_lng: -80.1947)
location42 = Api::Location.create(name: "Milwaukee, WI", center_lat: 43.0332, center_lng: -87.9056)
location43 = Api::Location.create(name: "Minneapolis, MN", center_lat: 44.972, center_lng: -93.2649)
location44 = Api::Location.create(name: "Nashville, TN", center_lat: 36.1763, center_lng: -86.7852)
location45 = Api::Location.create(name: "Newark, NJ", center_lat: 40.73256, center_lng: -74.17244)
location46 = Api::Location.create(name: "New Jersey", center_lat: 40.1189, center_lng: -74.3034)
location47 = Api::Location.create(name: "New Orleans, LA", center_lat: 29.9437, center_lng: -90.0755)
location48 = Api::Location.create(name: "New York City, NY", center_lat: 40.725, center_lng: -73.9986)
location49 = Api::Location.create(name: "Oakland, CA", center_lat: 37.79855, center_lng: -122.27035)
location50 = Api::Location.create(name: "Oklahoma City, OK", center_lat: 35.451, center_lng: -97.5163)
location51 = Api::Location.create(name: "Omaha, NE", center_lat: 41.24739, center_lng: -95.9975)
location52 = Api::Location.create(name: "Philadelphia, PA", center_lat: 39.9594, center_lng: -75.1668)
location53 = Api::Location.create(name: "Phoenix, AZ", center_lat: 33.4620, center_lng: -112.0729)
location54 = Api::Location.create(name: "Pittsburgh, PA", center_lat: 40.4373, center_lng: -79.9956)
location55 = Api::Location.create(name: "Plano, TX", center_lat: 33.0169, center_lng: -96.69886)
location56 = Api::Location.create(name: "Portland, OR", center_lat: 45.5178, center_lng: -122.6778)
location57 = Api::Location.create(name: "Raleigh, NC", center_lat: 35.7735, center_lng: -78.6375)
location58 = Api::Location.create(name: "Riverside, CA", center_lat: 33.9503, center_lng: -117.3957)
location59 = Api::Location.create(name: "Sacramento, CA", center_lat: 38.5754, center_lng: -121.4978)
location60 = Api::Location.create(name: "San Antonia, TX", center_lat: 29.4368, center_lng: -98.4966)
location61 = Api::Location.create(name: "San Diego, CA", center_lat: 32.7284, center_lng: -117.1611)
location62 = Api::Location.create(name: "San Francisco, CA", center_lat: 37.759036, center_lng: -122.449619)
location63 = Api::Location.create(name: "San Jose, CA", center_lat: 37.3313, center_lng: -121.8902)
location64 = Api::Location.create(name: "Santa Ana, CA", center_lat: 33.7439, center_lng: -117.8675)
location65 = Api::Location.create(name: "Seattle, WA", center_lat: 47.6004, center_lng: -122.332)
location66 = Api::Location.create(name: "St. Louis, MO", center_lat: 38.68083, center_lng: -90.2016)
location67 = Api::Location.create(name: "St. Paul, MN", center_lat: 44.95135, center_lng: -93.0892)
location68 = Api::Location.create(name: "Stockton, CA", center_lat: 37.95459, center_lng: -122.29089)
location69 = Api::Location.create(name: "Tampa, FL", center_lat: 27.9574, center_lng: -82.4577)
location70 = Api::Location.create(name: "Toledo, OH", center_lat: 41.660894, center_lng: -83.555)
location71 = Api::Location.create(name: "Tucson, AZ", center_lat: 32.2157, center_lng: -110.9264)
location72 = Api::Location.create(name: "Tulsa, OK", center_lat: 36.1431, center_lng: -95.9935)
location73 = Api::Location.create(name: "Virginia Beach, VA", center_lat: 36.8426, center_lng: -75.9811)
location74 = Api::Location.create(name: "Washington, DC", center_lat: 38.9014, center_lng: -77.03517)
location75 = Api::Location.create(name: "Wichita, KS", center_lat: 37.6815, center_lng: -97.3295)




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
comment1 = Api::Comment.create(author_id: 1, content: "Really nice route if your're in the city. 8/10 would recommend", route_id: 1)
comment2 = Api::Comment.create(author_id: 1, content: "Just ran through this route the other day. Was just the right distance for me. I loved it", route_id: 2)
comment3 = Api::Comment.create(author_id: 1, content: "Wasn't sure about this run before I started, but it turned out to be a lot nicer than expected.", route_id: 3)

# comments for user id 2
comment4 = Api::Comment.create(author_id: 2, content: "Thats what I call a good morning run", route_id: 1)
comment5 = Api::Comment.create(author_id: 2, content: "^ I definitely agree", route_id: 2)
comment6 = Api::Comment.create(author_id: 2, content: "", route_id: 3)
comment7 = Api::Comment.create(author_id: 2, content: "hello from comment7", route_id: 1)
comment8 = Api::Comment.create(author_id: 2, content: "hello from comment8", route_id: 2)
comment9 = Api::Comment.create(author_id: 2, content: "hello from comment9", route_id: 3)

# comments for user 3
comment10 = Api::Comment.create(author_id: 3, content: "hello from comment10", route_id: 1)
comment11 = Api::Comment.create(author_id: 3, content: "hello from comment11", route_id: 2)
comment12 = Api::Comment.create(author_id: 3, content: "hello from comment12", route_id: 3)
comment13 = Api::Comment.create(author_id: 3, content: "hello from comment13", route_id: 1)



# 8 kobe
# 24 hilary swank
# 25 steph curry
# 26 ben simmons
# 27 serena williams
# 28 joe rogan
# 33 klay thompson
# 34 david banner

#Guest  stuff
follows1 = Api::Following.create(user_id: 1, fan_id: 2)
follows2 = Api::Following.create(user_id: 1, fan_id: 3)
follows3 = Api::Following.create(user_id: 1, fan_id: 4)
follows4 = Api::Following.create(user_id: 1, fan_id: 5)
follows5 = Api::Following.create(user_id: 1, fan_id: 6)
follows6 = Api::Following.create(user_id: 1, fan_id: 8)
follows7 = Api::Following.create(user_id: 1, fan_id: 24)
follows8 = Api::Following.create(user_id: 1, fan_id: 25)
follows9 = Api::Following.create(user_id: 1, fan_id: 26)
follows10 = Api::Following.create(user_id: 1, fan_id: 27)
follows11 = Api::Following.create(user_id: 1, fan_id: 28)
follows12 = Api::Following.create(user_id: 1, fan_id: 33)
follows13 = Api::Following.create(user_id: 1, fan_id: 34)


follows14 = Api::Following.create(user_id: 7, fan_id: 1)
follows15 = Api::Following.create(user_id: 23, fan_id: 1)
follows16 = Api::Following.create(user_id: 24, fan_id: 1)
follows17 = Api::Following.create(user_id: 25, fan_id: 1)
follows18 = Api::Following.create(user_id: 26, fan_id: 1)
follows19 = Api::Following.create(user_id: 27, fan_id: 1)
follows20 = Api::Following.create(user_id: 32, fan_id: 1)
follows21 = Api::Following.create(user_id: 33, fan_id: 1)
follows22 = Api::Following.create(user_id: 4, fan_id: 1)
follows23 = Api::Following.create(user_id: 9, fan_id: 1)
follows24 = Api::Following.create(user_id: 12, fan_id: 1)
follows25 = Api::Following.create(user_id: 15, fan_id: 1)
follows26 = Api::Following.create(user_id: 3, fan_id: 1)



# 8 kobe
# 24 hilary swank
# 25 steph curry
# 26 ben simmons
# 27 serena williams
# 28 joe rogan
# 33 klay thompson
# 34 david banner

#jon jones stuff
follows = Api::Following.create(user_id: 3: fan_id: 24)
follows = Api::Following.create(user_id: 3: fan_id: 25)
follows = Api::Following.create(user_id: 3: fan_id: 26)
follows = Api::Following.create(user_id: 3: fan_id: 27)
follows = Api::Following.create(user_id: 3: fan_id: 28)
follows = Api::Following.create(user_id: 3: fan_id: 29)
follows = Api::Following.create(user_id: 3: fan_id: 33)
follows = Api::Following.create(user_id: 3: fan_id: 34)
follows = Api::Following.create(user_id: 3: fan_id: 12)
follows = Api::Following.create(user_id: 3: fan_id: 11)

follows = Api::Following.create(user_id: 25: fan_id: 3)
follows = Api::Following.create(user_id: 24: fan_id: 3)
follows = Api::Following.create(user_id: 34: fan_id: 3)
follows = Api::Following.create(user_id: 8: fan_id: 3)

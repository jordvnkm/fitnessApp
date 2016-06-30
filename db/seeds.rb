# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = Api::User.new(username: "guest", password: "password",
                      email: "guest@guest.com",
                      profile_img_url: "https://supermanherbs.com/wp-content/uploads/2014/09/spartan300.jpg")

guest.save

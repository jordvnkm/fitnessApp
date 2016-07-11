
# Ultimate Fitness Challenge

[GoTheDistance live][heroku]

[heroku]: http://gothedistance.herokuapp.com

GoTheDistance is a full stack web application that utilizes React.js with a Flux architectural framework for the frontend, and Ruby on Rails with a PostgreSQL database on the backend.


## Features & Implementation

### Single-Page-App
GoTheDistance has all content delivered by a single static page. All requests are redirected using a react router which renders react components based on the different urls.


### Route Creation

  Routes are stored on the database with columns that contain a user_id, name, and location_id.  The user_id column references a users table and corresponds to the author of the route.  The name just corresponds to the name of the route. The location_id references a locations table and corresponds to the city that the route is in.  

  Waypoints are stored in a database with a latitude, longitude, and route_id column.  The latitude and longitude columns correspond to geographic locations and the route_id column references the routes table.  

  Users specify waypoints by clicking on a google maps element.  The waypoints are stored on the frontend and routes are created using the google maps direction service api.  Once the user has specified the waypoints and clicks the `Create Route` button, a new database entry is stored for the route.  The route store is updated, and then the waypoints are created, using the route_id of the most recently added route in the route store.

![route_form](https://github.com/jordvnkm/fitnessApp/blob/master/docs/route_form.png)

### following of users

  Followings are stored in the database using a join table that stores the user_id, and the fan_id.  The user_id corresponds to the user that is being followed, and the fan_id corresponds to the user that is doing the following.  Users follow each other by visiting profiles and clicking the follow button.  The followings store holds the different followings throughout the application.  The `follow` button changes to `unfollow` if the user is following the current profile.  No follow button is displayed if the profile belongs to the current user.

### comments on routes

  Users can comment on running routes.  Comments are stored in the database with columns for content, route_id, user_id, and date.  The date column is currently not being used.  The content contains the text for the comment. The route_id corresponds to the route that the comment is on, and the user_id corresponds to the user that posted the comment.

  When viewing a routes detail component, a user can comment on the route if they are signed in.  If they are not signed in, the form will instruct them to sign in.

![sign in instructions](https://github.com/jordvnkm/fitnessApp/blob/master/docs/comment_sign_in.png)

![comment form](https://github.com/jordvnkm/fitnessApp/blob/master/docs/comment_sign_in.png)


### dashboard displays completed, authored, favorited routes

  Users can mark routes as completed and favorited, and the dashboard automatically displays any routes that have been authored by the current profile.  

  Completed routes are stored in the database as a join table between routes and users,  with a few extra columns for date, and notes.  The dates and notes columns are currently not in use but will be implemented in future updates.

  Favorite routes are stored in the database as a join table between routes and users.  

  The completed and favorited table entries are stored in their own respective stores on the front end.  When viewing a user profile, the completed, authored, and favorited routes and passed to the profile component from an ajax request.  

  When viewing a routes details, `favorite` and `mark as completed` buttons are shown based on the favorite and completed table entries that are saved in the front end stores.

![routes dashboard](https://github.com/jordvnkm/fitnessApp/blob/master/docs/routes_index.png)

### view routes based on location

  users may search all routes that given in a certain location.  At this moment, the location must be in the database, but may be switched to use google maps autocomplete eventually.  Once a user chooses a location, An ajax request will be made to find all the routes for that location.  The routes are then displayed on the location detail map.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### More route information in the route detail

I plan to show more route information, such as the steps for each leg of the route and the route distance.  I already know how to pull this information out of the google maps api, so rendering the right content should not be too difficult.

### logging workouts other than running routes.

I plan to implement more components that will allow a user to create, share, and comment on other workouts besides running routes.  These may include gym workouts, hiking trails.  

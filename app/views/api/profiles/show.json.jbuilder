json.user @user
json.home_location @user.home_location
json.followers @user.followers, partial: '/api/users/user', as: :user
json.followed_users @user.followed_users, partial: '/api/users/user', as: :user
json.favorite_routes @favorite_routes, partial: '/api/routes/route', as: :route
json.completed_routes @completed_routes, partial: '/api/routes/route', as: :route
json.authored_routes @authored_routes, partial: '/api/routes/route', as: :route

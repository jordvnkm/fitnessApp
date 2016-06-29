# Schema Information

## following
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed

## waypoints
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
lat         | integer   | not null
lng         | integer   | not null
route_id    | integer   | not null, foreign key (references routes), indexed
order       | integer   | not null

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
route_id    | integer   | not null, foreign key (references routes), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
content     | text      | not null
route_id    | string    | not null, foreign key (references routes), indexed

## routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null
location_id | integer   | not null, foreign key (references locations), indexed

## locations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
NE_lat      | integer   | not null
NE_lng      | integer   | not null
SW_lat      | integer   | not null
SW_lng      | integer   | not null

## completed_routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
route_id    | integer   | not null, foreign key (references routes), indexed
user_id     | integer   | not null, foreign key (references users), indexed
date        | date      | not null
notes       | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_img_url | string    |

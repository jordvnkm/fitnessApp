# Schema Information

## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user1_id    | integer   | not null
user2_id    | integer   | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
content     | string    | not null
route_id    | string    | not null, foreign key (references routes), indexed

## routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
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

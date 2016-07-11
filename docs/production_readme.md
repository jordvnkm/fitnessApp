
# Ultimate Fitness Challenge

[GoTheDistance live][heroku]
[heroku]: http://www.gothedistance.herokuapp.com

GoTheDistance is a full stack web application that utilizes React.js with a Flux architectural framework for the frontend, and Ruby on Rails with a PostgreSQL database on the backend.


## Features & Implementation

### Single-Page-App
GoTheDistance has all content delivered by a single static page. All requests are redirected using a react router which renders react components based on the different urls.


### Route Creation

  Routes are stored on the database with columns that contain a user_id, name, and location_id.  The user_id column references a users table and corresponds to the author of the route.  The name just corresponds to the name of the route. The location_id references a locations table and corresponds to the city that the route is in.  

  Waypoints are stored in a database with a latitude, longitude, and route_id column.  The latitude and longitude columns correspond to geographic locations and the route_id column references the routes table.  

  Users specify waypoints by clicking on a google maps element.  The waypoints are stored on the frontend and routes are created using the google maps direction service api.  Once the user has specified the waypoints and clicks the "Create Route" button, a new database entry is stored for the route.  The route store is updated, and then the waypoints are created, using the route_id of the most recently added route in the route store.

### following of users

  Followings are stored in the database using a join table that stores the user_id, and the fan_id.  The user_id corresponds to the user that is being followed, and the fan_id corresponds to the user that is doing the following.  Users follow each other by visiting profiles and clicking the follow button.  The followings store holds the different followings throughout the application.  The "follow" button changes to "unfollow" if the user is following the current profile.  No follow button is displayed if the profile belongs to the current user.

### comments on routes

  Users can comment on running routes.  Comments are stored in the database with columns for content, route_id, user_id, and date.  The date column is currently not being used.  The content contains the text for the comment. The route_id corresponds to the route that the comment is on, and the user_id corresponds to the user that posted the comment.


### dashboard displays completed, authored, favorited routes

  Users can mark routes as completed and favorited, and the dashboard automatically displays any routes that have been authored by the current profile.  

  Completed routes are stored in the database as a join table between routes and users,  with a few extra columns for date, and notes.  The dates and notes columns are currently not in use but will be implemented in future updates.

  Favorite routes are stored in the database as a join table between routes and users.  

  The completed and favorited routes are stored in their own respective stores on the front end.

![image of notebook index](https://github.com/appacademy/sample-project-proposal/blob/master/docs/noteIndex.png)

Note editing is implemented using the Quill.js library, allowing for a Word-processor-like user experience.

### User Followings.

  Followings are recorded in a Followings database table.  The table contains columns for user_id, and fan_id.  Both the user_id and fan_id correspond to entries in the users table.

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

`NotebookIndex` render method:

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  

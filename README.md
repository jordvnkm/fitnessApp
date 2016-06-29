# Ultimate Fitness Challenge

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Ultimate Fitness Challenge is a web application inspired by MapMyRun wthat will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Make running routes using google maps
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Allow users to "follow" other users
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Allow users to comment on runs
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Include a dashboard that tracks completed runs
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: user authentication and user profile(1 days, W1 Wed 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] front end auth
- [ ] guest demo login
- [ ] user profiles
- [ ] user settings


### Phase 2: Routes Model, API, and basic APIUtil (2 days, W1 fri 6pm)

**Objective:** Routes can be created, read, edited and destroyed through
the API.

- [ ] create `Route` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`RoutesController`)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] style route index, route detail, map and profile page
- [ ] navbar
- [ ] be able to favorite routes



### Phase 3: Route creation(3 days, W2 M 6pm)

**Objective:** Routes can be created, read, edited and destroyed with the
user interface.

- [ ] setup waypoints table and model
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each Route component, building out the flux loop as needed.
  - [ ] `RoutesIndex`
  - [ ] `RouteIndexItem`
  - [ ] `RouteForm`
  - [ ] `MapComponent`
- [ ] save Routes to the DB when the form loses focus or is left idle
  after editing.
- [ ] style routes components


### Phase 4: followers and comments (1 days, W2 Tu 6pm)

**Objective:** allow users to follow other users and create comments on routes

- [ ] create following join table
- [ ] create follow button on user profiles
- [ ] implement user search bar
- [ ] allow routes to be commented on
- [ ] style comments nad seed routes and comments with data


### Phase 5: discover routes page (1 days day, W2 Wed 6pm)

**Objective:** allow users to search for routes by city or name

- [ ] implement search bar component
- [ ] implement routes index
- [ ] style discover page

### Phase 6: homepage (1 days, W2 Thu 6pm)

**Objective:** create homepage component

- [ ] create homepage component
- [ ] discover routes component inside homepage
- [ ] style homepage


### Phase 1: production readme(1 days, W2 F 6pm)

**objective:** create a production readme

- [ ] to be determined




### Bonus Features (TBD)
- [ ] Search through notes for blocks of text
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md

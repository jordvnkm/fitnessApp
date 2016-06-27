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
- [ ] Allow users to "friend" other users
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

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin


### Phase 2: Routes Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Routes can be created, read, edited and destroyed through
the API.

- [ ] create `Route` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`RoutesController`)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.



### Phase 3: Flux Architecture and Router (2 days, W2 M 12pm)

**Objective:** Routes can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each Route component, building out the flux loop as needed.
  - [ ] `RoutesIndex`
  - [ ] `RouteIndexItem`
  - [ ] `RouteForm`
  - [ ] `MapComponent`
- [ ] save Routes to the DB when the form loses focus or is left idle
  after editing.


### Phase 4: Start Styling (0.5 days, W2 M 6pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Friends (0.5 days day, W2 Tu 12pm)

**Objective:** Allow users to befriend other users.
- [ ] create `friends` database table
- build out api, flux loop and components for:
  - [ ] current user befriends another user.

### Phase 6: Locations (1 days, W2 Wed 12pm)

**Objective:** Routes can be discovered by looking at location.

- [ ] create `Location` model
- build out API, Flux loop, and components for:
  - [ ] fetching routes for a certain location
  - [ ] updating RoutesIndex if needed
- [ ] Style new elements


### Phase 7: Show completed routes on user profiles (1 days, W2 Thu 12pm)

**objective:** Show completed routes on user profiles

- [ ] Create `completed_routes` join table
- build out API, Flux loop, and components for:
  - [ ] CompleteRoutesIndex
  - [ ] CompletedRoutesIndexItem
  - [ ] Fetching completed routes for user id


### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

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

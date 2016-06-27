# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Routes

- `GET /api/routes/:locationId`
  - Routes index
- `POST /api/routes/:locationId`
- `GET /api/routes/:locationId/:routeId`
- `PATCH /api/routes/:locationId/:routeId`
- `DELETE /api/routes/:locationId/:routeId`

### Comments

- `GET /api/routes/:locationId/:routeId/comments`
- `POST /api/routes/:locationId/:routeId/comments`
- `GET /api/routes/:locationId/:routeId/comments/:id`
- `PATCH /api/routes/:locationId/:routeId/comments/:id`
- `DELETE /api/routes/:locationId/:routeId/comments/:id`

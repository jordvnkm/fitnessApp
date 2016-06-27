# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Routes Cycles

### Routes API Request Actions

* `fetchAllRoutes`
  0. invoked from `DiscoverRoutes` `didMount`/`willReceiveProps`
  0. `GET /api/routes/:locationId` is called
  0. `receiveAllRoutes` is set as the callback

* `createRoute`
  0. invoked from new route button `onClick`
  0. `Post /api/routes/:locationId` is called.
  0. `receiveSingleRoute` is set as the callback

* 'fetchSingleRoute'
  0. invoked from `RouteDetail` `didMount`/`willReceiveProps`
  0. `GET /api/routes/:locationId/:routeId` is called.
  0. `receiveSingleRoute` is set as the callback

* `updateRoute`
  0. invoked from update route button `onClick`
  0. `PATCH /api/routes/:locationId/:routeId` is called
  0. `receiveSingleRoute` is set as the callback

* `destroyRoute`
  0. invoked from delete route button `onClick`
  0. 'DELETE /api/routes/:locationId/:routeId' is called
  0. `removeRoute` is set as the callback

### Routes API Response Actions

* `receiveAllRoutes`
  0. invoked from an API callback.
  0. `Route` store updates `_routes` and emits change

* `receiveSingleRoute`
  0. invoked from an API callback.
  0. `Route` store updates `_routes[id]` and emits change

* `removeRoute`
  0. invoked from API callback.
  0. `Route` store removes `_routes[id]` and emits change

### Store Listeners

* `RoutesIndex` component listens to `Route` Store.
* `RouteDetail` component listens to `Route` Store.


## Comments Cycles

### Comments API Request Actions

* `fetchRouteComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/routes/:locationId/:routeId/comments` is called
  0. `receiveRouteComments` is set as the callback

* `createComment`
  0. invoked from new comment button `onClick`
  0. `POST /api/routes/:locationId/:routeId/comments` is called
  0. `receiveSingleComment` is set as the callback

* `destroyComment`
  0. invoked from delete comment button `onClick`
  0. `DELETE /api/routes/:locationId/:routeId/comments/:commentId`
  0. `receiveSingleComment` is set as the callback

### Comments API response actions

* `receiveRouteComments`
  0. invoked from api callback
  0. `comments` store updates `_comments` and emits change

* `receiveSingleComment`
  0. invoked from api callback
  0. `comments` store update `_comments` and emits change

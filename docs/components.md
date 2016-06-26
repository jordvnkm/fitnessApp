## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
* Homepage
  * CreateRoute
    * **RouteForm**
  * DiscoverRoutesIndex
    * **RouteDetail**
    * CommentsIndex
    * CommentsForm
  * Friends
    * **FriendsIndex**
      * **UserDetail**
      * completedRoutesIndex
        * **RouteDetail**
        * CommentsIndex
        * CommentsForm
  * CompletedRoutesIndex
    * **RouteDetail**
    * CommentsIndex
    * CommentsForm

## Routes

* **component:** 'App' **path:** '/'
  * **component:** 'HomePage' **path:** IndexRoute
  * **component:** 'RouteForm' **path:** 'routes/create'
  * **component:** 'RouteDetail' **path:** 'routes/:routeId'
    * **component:** 'Comments' **path:** 'comments'
  * **component:** 'UserDetail' **path:** 'user/:userId'
    * **component:** 'FriendsIndex' **path:** 'friends'

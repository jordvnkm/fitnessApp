## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
* Homepage
  * CreateRoute
    * **RouteCreate**
    * RouteForm
    * MapComponent
  * Friends
    * **FriendsIndex**
      * FriendsIndexItem
      * SearchBar
  * User
    * **UserProfile**
      * completedRoutesIndex
      * completedRoutesIndexItem
      * MapComponent
      * UserImage
      * UserDetail
  * DiscoverRoutesIndex
    * DiscoverRoutesIndexItem
    * **DiscoverRoutes**
      * mapComponent
      * RoutesIndex
      * RoutesIndexItem
        * **RouteDetail**
          * RouteSpecs
          * mapComponent
          * CommentsIndex
            * CommentsIndexItem
          * CommentsForm
## Routes

* **component:** 'App' **path:** '/'
  * **component:** 'HomePage' **path:** IndexRoute
  * **component:** 'RouteCreate' **path:** 'routes/create'
  * **component:** 'FriendsIndex' **path:** 'user/:userId/friends'
  * **component:** 'UserProfile'  **path:** 'user/:userId'
  * **component:** 'DiscoverRoutes' **path:** 'routes/:locationId'
    * **component:** 'RouteDetail' **path:** ':routeId'

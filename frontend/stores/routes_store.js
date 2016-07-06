const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const RouteConstants = require("../constants/route_constants");


let RouteStore = new Store(AppDispatcher);

let _routes = {};
let _lastAdded = {};

RouteStore.__onDispatch = function(payload){
  switch (payload.actionType) {
  case RouteConstants.ROUTE_RECEIVED:
    addRoute(payload.route);
    RouteStore.__emitChange();
    break;
  case RouteConstants.ROUTES_RECEIVED:
    resetRoutes(payload.routes);
    RouteStore.__emitChange();
    break;
  case RouteConstants.ROUTE_REMOVED:
    removeRoute(payload.route);
    RouteStore.__emitChange();
    break;
  }
};



const removeRoute = function(route){
  _routes[route.id] = undefined;
};


RouteStore.lastAdded = function(){
  return Object.assign({}, _lastAdded);
};

const addRoute = function(route){
  _routes[route.id] = route;
  _lastAdded = route;
};

const resetRoutes = function(routes){
  _routes = {};

  routes.routes.forEach((route) => {
    _routes[route.id] = route;
  });
};


RouteStore.find = function(routeId){
  return _routes[routeId]
};


RouteStore.all = function(){
  let allRoutes = [];
  Object.keys(_routes).forEach((id) => {
    allRoutes.push(_routes[id]);
  })
  return allRoutes;
};


module.exports = RouteStore;

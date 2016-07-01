const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const RouteConstants = require("../constants/route_constants");


let RouteStore = new Store(AppDispatcher);

let _routes = {};
let _errors;

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
  case RouteConstants.ERROR:
    setErrors(payload.errors);
    RouteStore.__emitChange();
    break;
  }
};

const addRoute = function(route){
  _routes[route.id] = route;
};

const resetRoutes = function(routes){
  _routes = {};
  routes.forEach((route) => {
    _routes[route.id] = route;
  });
};

const setErrors = function(errors){
  _errors = errors;
};

RouteStore.find = function(routeId){
  return _routes[routeId]
};


RouteStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};


RouteStore.all = function(){
  return Object.assign({}, _routes);
};


module.exports = RouteStore;

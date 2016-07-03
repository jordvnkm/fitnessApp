const RouteApiUtil = require("../util/route_api_util");
const AppDispatcher = require("../dispatcher/dispatcher");
const RouteConstants = require("../constants/route_constants");
const ErrorConstants = require("../constants/error_constants");

const RouteActions = {
  fetchRoute: function(routeId){
    RouteApiUtil.fetchRoute(routeId, RouteActions.receiveRoute, RouteActions.handleError);
  },

  receiveRoute: function(route){
    AppDispatcher.dispatch({
      actionType: RouteConstants.ROUTE_RECEIVED,
      route: route
    });
  },

  createRoute: function(route){
    RouteApiUtil.createRoute(route, RouteActions.receiveRoute, RouteActions.handleError);
  },


  receiveRoutes: function(routes){
    AppDispatcher.dispatch({
      actionType: RouteConstants.ROUTES_RECEIVED,
      routes: routes
    });
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }


};


module.exports = RouteActions;

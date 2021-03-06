

const RouteApiUtil = {
  fetchRoute: function(routeId, successCallback, errorCallback){
    $.ajax({
      url: `/api/routes/${routeId}`,
      success: function(route){
        successCallback(route);
      },

      error: function(error){
        errorCallback(error);
      }
    });
  },

  fetchRoutesForLocation: function(locationId, successCallback, errorCallback){
    let params = {location_id: locationId};
    $.ajax({
      url: `api/routes/`,
      data: params,
      success: function(routes){
        successCallback(routes);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },

  createRoute: function(route, successCallback, errorCallback){
    let params = {route: route}
    $.ajax({
      url: '/api/routes',
      type: "POST",
      data: params,
      success: function(route){
        successCallback(route);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },

  deleteRoute: function(routeId , successCallback, errorCallback){
    $.ajax({
      url: `/api/routes/${routeId}`,
      type: "DELETE",
      success: function(route){
        successCallback(route);
      },

      error: function(error){
        errorCallback(error);
      }
    });
  }
};


module.exports = RouteApiUtil;

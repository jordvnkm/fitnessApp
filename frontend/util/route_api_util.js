

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
  }
};


module.exports = RouteApiUtil;

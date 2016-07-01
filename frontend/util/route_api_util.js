

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
};


module.exports = RouteApiUtil;



const WaypointApiUtil = {
  createWaypoint: function(mywaypoint, successCallback, errorCallback){
    let params = {waypoint: mywaypoint}
    $.ajax({
      url: '/api/waypoints',
      type: "POST",
      data: params,
      success: function(waypoint){
        successCallback(waypoint);
      },

      error: function(error){
        errorCallback(error);
      }
    });
  }
};


module.exports = WaypointApiUtil;

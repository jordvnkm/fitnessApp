const WaypointApiUtil = require("../util/waypoint_api_util");
const WaypointConstants = require("../constants/waypoint_constants");
const ErrorConstants = require("../constants/error_constants");
const AppDispatcher = require("../dispatcher/dispatcher");

const WaypointActions = {
  createWaypoint: function(waypoint){
    WaypointApiUtil.createWaypoint(waypoint, WaypointActions.receiveWaypoint, WaypointActions.handleError);
  },

  receiveWaypoint: function(waypoint){
    AppDispatcher.dispatch({
      actionType: WaypointConstants.WAYPOINT_RECEIVED,
      waypoint: waypoint
    });
  },

  resetWaypoints: function(){
    AppDispatcher.dispatch({
      actionType: WaypointConstants.RESET_WAYPOINTS
    });
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }


};


module.exports = WaypointActions;

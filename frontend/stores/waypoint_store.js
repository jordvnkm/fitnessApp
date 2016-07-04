const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const WaypointConstants = require("../constants/waypoint_constants");


let WaypointStore = new Store(AppDispatcher);

let _waypoints = [];

WaypointStore.__onDispatch = function(payload){
  if (payload.actionType === WaypointConstants.WAYPOINT_RECEIVED){
    addWaypoint(payload.waypoint);
    WaypointStore.__emitChange();
  }
  else{
    resetWaypoints();
    WaypointStore.__emitChange();
  }
};

WaypointStore.all = function(){
  return _waypoints.slice();
}

const addWaypoint = function(waypoint){
  _waypoints.push(waypoint);
}

const resetWaypoints = function(){
  _waypoints = [];
};

module.exports = WaypointStore;

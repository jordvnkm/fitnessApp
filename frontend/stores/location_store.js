const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const LocationConstants = require("../constants/location_constants");

let LocationStore = new Store(AppDispatcher);

let _locations = {};


LocationStore.__onDispatch = function(payload){
  switch (payload.actionType) {
  case LocationConstants.LOCATIONS_RECEIVED:
    resetLocations(payload.locations);
    LocationStore.__emitChange();
    break;
  case LocationConstants.LOCATION_RECEIVED:
    addLocation(payload.location);
    LocationStore.__emitChange();
    break;
  }
}


const addLocation = function(location){
  _locations[location.id] = location;
};

const resetLocations = function(locations){
  _locations = {};
  locations.forEach((location) => {
    _locations[location.id] = location;
  })
};


LocationStore.all = function(){
  let allLocations = [];
  Object.keys(_locations).forEach((locationid) => {
    allLocations.push(_locations[locationid]);
  });

  return allLocations;
}


LocationStore.find = function(id){
  return _locations[id]
}


module.exports = LocationStore;

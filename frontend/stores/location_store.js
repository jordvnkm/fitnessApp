const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const LocationConstants = require("../constants/Location_constants");

let LocationStore = new Store(AppDispatcher);

let _locations = {};
let _errors;


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
  case LocationConstants.ERROR:
    setErrors(payload.errors);
    LocationStore.__emitChange();
    break;
  }
}

const setErrors = function(errors){
  _errors = errors;
};


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

LocationStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
}

LocationStore.find = function(id){
  return _locations[id]
}


module.exports = LocationStore;

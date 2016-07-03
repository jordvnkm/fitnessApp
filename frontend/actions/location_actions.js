const LocationApiUtil = require("../util/location_api_util");
const AppDispatcher = require("../dispatcher/dispatcher");
const LocationConstants = require("../constants/location_constants");
const ErrorConstants = require("../constants/error_constants");



const LocationActions = {
  fetchAllLocations: function(){
    LocationApiUtil.fetchLocations(LocationActions.receiveLocations, LocationActions.handleError);
  },

  receiveLocations: function(locations){
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATIONS_RECEIVED,
      locations: locations.locations
    });
  },

  receiveLocation: function(location){
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATION_RECEIVED,
      location: location
    });
  },

  getLocation: function(locationId){
    LocationApiUtil.getLocation(locationId, LocationActions.receiveLocation, LocationActions.handleError);
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};



module.exports = LocationActions;

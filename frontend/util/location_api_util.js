

const LocationApiUtil = {
  fetchLocations: function(successCallback, errorCallback){
    $.ajax({
      url: `/api/locations`,
      success: function(locations){
        successCallback(locations);
      },

      error: function(error){
        errorCallback(error);
      }
    });
  },

  getLocation: function(locationId, successCallback, errorCallback){
    $.ajax({
      url: `/api/locations/${locationId}`,
      success: function(location){
        successCallback(location);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  }
};


module.exports = LocationApiUtil;

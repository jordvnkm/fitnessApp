const ProfileApiUtil = require("../util/profile_api_util");
const AppDispatcher = require("../dispatcher/dispatcher");
const ProfileConstants = require("../constants/profile_constants");

const ProfileActions = {
  fetchProfile: function(userId){
    ProfileApiUtil.fetchProfile(userId, ProfileActions.receiveProfile, ProfileActions.handleError);
  },

  receiveProfile: function(profile){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      profile: profile
    });
  },

  receiveProfiles: function(profiles){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILES_RECEIVED,
      profiles: profiles
    })
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.ERROR,
      errors: error.responseJSON.errors
    });
  },
};


module.exports = ProfileActions;

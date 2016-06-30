

const ProfileApiUtil = {
  fetchProfile: function(userId, successCallback, errorCallback){
    $.ajax({
      url: `/api/profiles/${userId}`,
      success: function(profile){
        successCallback(profile);
      },
      error: function(error){
        errorCallback(error);
      }
    });
  },


};


module.exports = ProfileApiUtil;

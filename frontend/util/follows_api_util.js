

module.exports = {
  fetchFollowsForUser: function(userId, successCallback, errorCallback){
    $.ajax({
      url: `/api/followings/${userId}`,
      success: function(follows){
        successCallback(follows);
      },

      error: function(error){
        errorCallback(error);
      }
    });
  },

  createFollow: function(following, successCallback, errorCallback){
    let params = {following: following};
    $.ajax({
      url: `/api/followings`,
      type: "POST",
      data: params,
      success: function(follow){
        successCallback(follow);
      },

      error: function(error){
        errorCallback(error);
      }
    });
  },

  deleteFollow: function(followId, successCallback, errorCallback){
    $.ajax({
      url: `/api/followings/${followId}`,
      type: "DELETE",
      success: function(follow){
        successCallback(follow);
      },

      error: function(error){
        errorCallback(eror);
      }
    });
  }
}

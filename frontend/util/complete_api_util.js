

const CompleteApiUtil = {
  fetchCompletedForUser: function(userid, successCallback, errorCallback){
    $.ajax({
      url: `/api/completed_routes/${userid}`,
      success: function(completed){
        successCallback(completed);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },

  createCompleted: function(completed, successCallback, errorCallback){
    let params = {completed: completed};
    $.ajax({
      url: `/api/completed_routes`,
      type: "POST",
      data: params,
      success: function(completed){
        successCallback(completed);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },

  deleteCompleted(completedId, successCallback, errorCallback){
    $.ajax({
      url: `/api/completed_routes/${completedId}`,
      type: "DELETE",
      success: function(completed){
        successCallback(completed);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  }
};

module.exports = CompleteApiUtil;

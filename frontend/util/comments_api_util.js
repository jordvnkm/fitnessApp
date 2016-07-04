

const CommentsApiUtil = {
  fetchCommentsForRoute: function(routeId, successCallback, errorCallback){
    $.ajax({
      url: `/api/comments/${routeId}`,
      success: function(comments){
        successCallback(comments);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },

  createComment: function(comment, successCallback, errorCallback){
    $.ajax({
      url: `/api/comments`,
      type: "POST",
      data: params,
      success: function(comment){
        successCallback(comment);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },

  deleteComment: function(commentId, successCallback, errorCallback){
    $.ajax({
      url: `/api/comments/${commentId}`,
      type: "DELETE",
      success: function(comment){
        successCallback(comment);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },
};

module.exports = CommentsApiUtil;

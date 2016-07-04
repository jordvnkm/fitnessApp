const CommentsApiUtil = require("../util/comments_api_util");
const AppDispatcher = require("../dispatcher/dispatcher");
const ErrorConstants = require("../constants/error_constants");
const CommentConstants = require("../constants/comment_constants");


const CommentActions = {
  fetchCommentsForRoute: function(routeId){
    CommentsApiUtil.fetchCommentsForRoute(routeId, CommentActions.receiveAllComments, CommentActions.handleError);
  },

  receiveAllComments: function(comments){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveComment: function(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    })
  },

  createComment: function(comment){
    CommentsApiUtil.createComment(comment, CommentActions.receiveComment, CommentActions.handleError);
  },

  deleteComment: function(commentId){
    CommentsApiUtil.deleteComment(commentId, CommentActions.removeComment, CommentActions.handleError);
  },

  removeComment: function(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_REMOVED,
      comment: comment,
    });
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.error
    });
  }
};

module.exports = CommentActions;

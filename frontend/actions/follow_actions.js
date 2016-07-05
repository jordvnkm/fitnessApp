const AppDispatcher = require("../dispatcher/dispatcher");
const FollowsApiUtil = require("../util/follows_api_util");
const FollowConstants = require("../constants/follows_constants");
const ErrorConstants = require("../constants/error_constants");

const FollowActions = {
  fetchFollowsForUser: function(userId){
    FollowsApiUtil.fetchFollowsForUser(userId, FollowActions.receiveAllFollows, FollowActions.handleError);
  },

  receiveAllFollows: function(follows){
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOWS_RECEIVED,
      follows: follows
    });
  },

  createFollow: function(follow){
    FollowsApiUtil.createFollow(follow, FollowActions.receiveFollow, FollowActions.handleError);
  },

  deleteFollow: function(followId){
    FollowsApiUtil.deleteFollow(followId, FollowActions.removeFollow, FollowActions.handleError);
  },

  removeFollow: function(follow){
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_REMOVED,
      follow: follow
    });
  },

  receiveFollow: function(follow){
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_RECEIVED,
      follow: follow
    });
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }


};

module.exports = FollowActions;

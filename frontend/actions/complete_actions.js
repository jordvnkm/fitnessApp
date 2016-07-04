const CompleteApiUtil = require("../util/complete_api_util");
const AppDispatcher = require("../dispatcher/dispatcher");
const CompleteConstants = require("../constants/complete_constants");
const ErrorConstants = require("../constants/error_constants");


const CompleteActions = {
  fetchCompletedForUser: function(userId){
    CompleteApiUtil.fetchCompletedForUser(userId, CompleteActions.receiveAllCompleted, CompleteActions.handleError);
  },

  receiveAllCompleted: function(completeds){
    AppDispatcher.dispatch({
      actionType: CompleteConstants.COMPLETEDS_RECEIVED,
      completeds: completeds
    })
  },

  receiveCompleted: function(completed){
    AppDispatcher.dispatch({
      actionType: CompleteConstants.COMPLETED_RECEIVED,
      completed: completed
    });
  },

  createCompleted: function(completed){
    CompleteApiUtil.createCompleted(completed, CompleteActions.receiveCompleted, CompleteActions.handleError);
  },

  deleteCompleted: function(completedId){
    CompleteApiUtil.deleteCompleted(completedId, CompleteActions.removeCompleted, CompleteActions.handleError);
  },

  removeCompleted: function(completed){
    AppDispatcher.dispatch({
      actionType: CompleteConstants.COMPLETED_REMOVED,
      completed: completed
    })
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.error
    })
  }
};

module.exports = CompleteActions;

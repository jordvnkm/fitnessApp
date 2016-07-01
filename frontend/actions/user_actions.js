const UserApiUtil = require("../util/user_api_util");
const AppDispatcher = require("../dispatcher/dispatcher");
const UserConstants = require("../constants/user_constants");

const UserActions = {
  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
  },

  signUp: function(user){
    UserApiUtil.signUp(user, UserActions.receiveCurrentUser, UserActions.handleError);
  },

  logIn: function(user){
    UserApiUtil.logIn(user, UserActions.receiveCurrentUser, UserActions.handleError);
  },

  guestLogin: function(){
    UserActions.logIn({username: "guest", password: "password"});
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(error){
    console.log(error);
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  },

  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT,
    });
  },

  logout: function(){
    UserApiUtil.logOut(UserActions.removeCurrentUser, UserActions.handleError);
  }
}

module.exports = UserActions;

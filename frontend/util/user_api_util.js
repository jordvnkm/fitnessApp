

const UserApiUtil = {
  fetchCurrentUser: function(successCallback, errorCallback){
    // $.ajax({
    //
    // });
  },

  signUp: function(user, successCallback, errorCallback){
    let params = {user: user}
    $.ajax({
      url: 'api/users',
      type: "POST",
      data: params,
      success: function(user){
        successCallback(user);
      },
      error: function(errorResp){
        errorCallback(errorResp);
      }
    });
  },

  logIn: function(user, successCallback, errorCallback){

  },

  logOut: function(successCallback, errorCallback){

  }
};



module.exports = UserApiUtil;

//
// fetchCurrentUser: function(){
//   UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
// },
//
// signUp: function(user){
//   UserApiUtil.signUp(user, UserActions.receiveCurrentUser, UserActions.handleError);
// },
//
// logIn: function(user){
//   UserApiUtil.logIn(user, UserActions.receiveCurrentUser, UserActions.handleError);
// },
//
// guestLogin: function(){
//   UserActions.logIn({username: "guest", password: "password"});
// },
//
// receiveCurrentUser: function(user){
//   AppDispatcher.dispatch({
//     actionType: UserConstants.LOGIN,
//     user: user
//   });
// },
//
// handleError: function(error){
//   AppDispatcher.dispatch({
//     actionType: UserConstants.ERROR,
//     errors: error.responseJSON.errors
//   })
// },
//
// removeCurrentUser: function(){
//   AppDispatcher.dispatch({
//     actionType: UserConstants.LOGOUT,
//   });
// }
//
// logout: function(){
//   UserApiUtil.logOut(UserActions.removeCurrentUser, UserActions.handleError);
// }

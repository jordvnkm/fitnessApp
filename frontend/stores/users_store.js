const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const UserConstants = require("../constants/user_constants");

let UserStore = new Store(AppDispatcher);

let _currentUser = null;
let _errors;

UserStore.__onDispatch = function(payload){
  switch (payload.actionType){
  case UserConstants.LOGIN:
    loginUser(payload.user);
    UserStore.__emitChange();
    break;
  case UserConstants.LOGOUT:
    logoutUser();
    UserStore.__emitChange();
    break;
  case UserConstants.ERROR:
    setErrors(payload.errors);
    UserStore.__emitChange();
    break;
  }
};

UserStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
},

UserStore.currentUser = function(){
  if (_currentUser){
    return Object.assign({}, _currentUser);
  }
  return null;
};

const setErrors = function(errors){
  _errors = errors;
};

const loginUser = function(user){
  _currentUser = user;
  _errors = null;
};

const logoutUser = function(){
  _currentUser = null;
  _errors = null;
};



module.exports = UserStore;

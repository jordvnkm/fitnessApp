const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const UserConstants = require("../constants/user_constants");

let UserStore = new Store(AppDispatcher);

let _currentUser = null;
let _allUsers = [];

UserStore.__onDispatch = function(payload){
  switch (payload.actionType){
  case UserConstants.LOGIN:
    loginUser(payload.user);
    console.log("store");
    UserStore.__emitChange();
    break;
  case UserConstants.LOGOUT:
    logoutUser();
    UserStore.__emitChange();
    break;
  case UserConstants.USERS_RECEIVED:
    resetUsers(payload.users);
    UserStore.__emitChange();
    break;
  }
};


UserStore.popularUsers = function(){
  _allUsers.sort(function(a,b){
    let keya = a.follower_count;
    let keyb = b.follower_count;

    if (keya < keyb){
      return -1;
    }
    if (keya > keyb){
      return 1;
    }
    return 0;
  });

  _allUsers.reverse();
  if (_allUsers.length <= 10){
    return _allUsers.slice();
  }
  else {
    return _allUsers.slice(0, 10);
  }

}




UserStore.all = function(){
  if (_allUsers.length > 0){
    return _allUsers.slice();
  }
  else{
    return [];
  }
}

UserStore.currentUser = function(){
  if (_currentUser){
    return Object.assign({}, _currentUser);
  }
  return null;
};



const resetUsers = function(users){
  _allUsers = users.users;
}

const loginUser = function(user){
  _currentUser = user;
};

const logoutUser = function(){
  _currentUser = null;
};



module.exports = UserStore;

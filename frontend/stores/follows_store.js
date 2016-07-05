const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const FollowConstants = require("../constants/follows_constants");


let FollowStore = new Store(AppDispatcher);

let _userFollowers = {};
let _fanFollows = {};


FollowStore.__onDispatch = function(payload){
  switch (payload.actionType){
  case FollowConstants.FOLLOWS_RECEIVED:
    resetFollows(payload.follows);
    break;

  case FollowConstants.FOLLOW_RECEIVED:
    addFollow(payload.follow)
    break;;
  case FollowConstants.FOLLOW_REMOVED:
    removeFollow(payload.follow);
    break;
  }
  FollowStore.__emitChange();
};

const addFollow = function(follow){
  _userFollowers[follow.id] = follow;
};

const removeFollow = function(follow){
  let userFollows = Object.assign({}, _userFollowers);
  _userFollowers = {};
  Object.keys(userFollows).forEach((id) => {
    if (parseInt(id) !== follow.id){
      _userFollowers[id] = userFollows[id];
    }
  });
};

const resetFollows = function(follows){
  let userFollows = follows.followings_as_user;
  let fanFollows = follows.followings_as_fan;

  _userFollowers = {};
  _fanFollows = {};
  userFollows.forEach((follow) => {
    _userFollowers[follow.id] = follow;
  });

  fanFollows.forEach((follow) => {
    _fanFollows[follow.id] = follow
  });
};

FollowStore.allUserFollowers = function(){
  let followers = [];
  Object.keys(_userFollowers).forEach((id) => {
    followers.push(_userFollowers[id]);
  })
  return followers;
};


FollowStore.allFollowingsAsFan = function(){
  let followings = [];
  Object.keys(_fanFollows).forEach((id) => {
    followings.push(_fanFollows[id]);
  });
  return followings;
};

FollowStore.find = function(userId, fanId){
  let following ;
  Object.keys(_userFollowers).forEach((id) => {
    if (_userFollowers[id].user.id === userId && _userFollowers[id].fan.id === fanId){
      following = _userFollowers[id];
    }
  })
  return following;
};

module.exports = FollowStore;

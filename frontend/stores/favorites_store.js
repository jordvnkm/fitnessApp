const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const FavoriteConstants = require("../constants/favorite_constants");

let FavoriteStore = new Store(AppDispatcher);

let _faves = {};


FavoriteStore.__onDispatch = function(payload){
  switch (payload.actionType) {
  case FavoriteConstants.FAVORITES_RECEIVED:
    resetFavorites(payload.favorites);
    FavoriteStore.__emitChange();
    break;
  case FavoriteConstants.FAVORITE_RECEIVED:
    addFavorite(payload.favorite);
    FavoriteStore.__emitChange();
    break;
  case FavoriteConstants.FAVORITE_REMOVED:
    removeFavorite(payload.favorite);
    FavoriteStore.__emitChange();
    break;
  }
}

FavoriteStore.find = function(userId, routeId){
  let fave;
  Object.keys(_faves).forEach((id) => {
    if ((_faves[id].user_id) === userId && (_faves[id].route_id === routeId)){
      fave = _faves[id];
    }
  });
  return fave;
}

const addFavorite = function(favorite){
  _faves[favorite.id] = favorite
}

const removeFavorite = function(favorite){
  _faves = {}
  Object.keys(_faves).forEach((id) => {
    if (id !== favorite.id){
      _faves[id] = _faves[id];
    }
  })
}

const resetFavorites = function(faves){
  _faves = {};
  faves.favorites.forEach((favorite) => {
    _faves[favorite.id] = favorite
  })
};

FavoriteStore.all = function(){
  return Object.assing({}, _faves);
};


module.exports = FavoriteStore;

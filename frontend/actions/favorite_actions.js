const FavoriteApiUtil = require("../util/favorite_api_util");
const FavoriteConstants = require("../constants/favorite_constants");
const AppDispatcher = require("../dispatcher/dispatcher");
const ErrorConstants = require("../constants/error_constants");

const FavoriteActions = {
  fetchFavoritesForUser: function(userId){
    FavoriteApiUtil.fetchFavoritesForUser(userId, FavoriteActions.receiveFavorites, FavoriteActions.handleError);
  },

  receiveFavorites: function(favorites){
    AppDispatcher.dispatch({
      actionType: FavoriteConstants.FAVORITES_RECEIVED,
      favorites: favorites
    });
  },

  receiveFavorite: function(favorite){
    AppDispatcher.dispatch({
      actionType: FavoriteConstants.FAVORITE_RECEIVED,
      favorite: favorite
    });
  },

  createFavorite: function(favorite){
    FavoriteApiUtil.createFavorite(favorite, FavoriteActions.receiveFavorite, FavoriteActions.handleError);
  },

  deleteFavorite: function(favorite){
    FavoriteApiUtil.deleteFavorite(favorite, FavoriteActions.removeFavorite, FavoriteActions.handleError);
  },

  removeFavorite: function(favorite){
    AppDispatcher.dispatch({
      actionType: FavoriteConstants.FAVORITE_REMOVED,
      favorite: favorite
    });
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }


};

module.exports = FavoriteActions;

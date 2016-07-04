


const FavoriteApiUtil = {
  fetchFavoritesForUser: function(userId, successCallback, errorCallback){
    $.ajax({
      url: `/api/favorites/${userId}`,
      success: function(favorites){
        successCallback(favorites);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },

  createFavorite: function(favorite, successCallback, errorCallback){
    let params = {favorite: favorite}
    $.ajax({
      url: `/api/favorites`,
      type: "POST",
      data: params,
      success: function(favorite){
        successCallback(favorite);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },

  deleteFavorite(favorite, successCallback, errorCallback){
    $.ajax({
      url: `/api/favorites/${favorite.id}`,
      type: "DELETE",
      success: function(favorite){
        successCallback(favorite);
      },

      error: function(error){
        errorCallback(error);
      }
    })
  },
};

module.exports = FavoriteApiUtil;

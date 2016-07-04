const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const CommentConstants = require("../constants/comment_constants");

let CommentsStore = new Store(AppDispatcher);

let _comments = {};


CommentsStore.__onDispatch = function(payload){
  switch (payload.actionType){
  case CommentConstants.COMMENTS_RECEIVED:
    resetComments(payload.comments);
    break;
  case CommentConstants.COMMENT_RECEIVED:
    addComment(payload.comment);
    break;
  case CommentConstants.COMMENT_REMOVED:
    removeComment(payload.comment)
    break;
  }

  CommentsStore.__emitChange();
}

CommentsStore.all = function(){
  return Object.assign({}, _comments);
}


const resetComments = function(comments){
  _comments = {};
  comments.comments.forEach((comment) => {
    _comments[comment.id] = comment;
  });
}

const addComment = function(comment){
  _comments[comment.id] = comment
};

const removeComment = function(comment){
  let comments = Object.assign({}, _comments)
  _comments = {};
  Object.keys(comments).forEach((id) => {
    if (parseInt(id) !== comment.id){
      _comments[id] == comments[id]
    }
  });
}


module.exports = CommentsStore;

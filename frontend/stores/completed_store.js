const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const CompletedConstants = require("../constants/complete_constants");

let CompletedStore = new Store(AppDispatcher);

let _completeds = {};


CompletedStore.__onDispatch = function(payload){
  switch (payload.actionType) {
  case CompletedConstants.COMPLETEDS_RECEIVED:
    resetCompleteds(payload.completeds);
    CompletedStore.__emitChange();
    break;
  case CompletedConstants.COMPLETED_RECEIVED:
    addCompleted(payload.completed);
    CompletedStore.__emitChange();
    break;
  case CompletedConstants.COMPLETED_REMOVED:
    removeCompleted(payload.completed);
    CompletedStore.__emitChange();
    break;
  }
}

CompletedStore.find = function(userId, routeId){
  let completed;
  Object.keys(_completeds).forEach((id) => {
    if ((_completeds[id].user_id) === userId && (_completeds[id].route_id === routeId)){
      completed = _completeds[id];
    }
  });
  return completed;
}

const addCompleted = function(completed){
  _completeds[completed.id] = completed
}

const removeCompleted = function(completed){
  let completeds = Object.assign({}, _completeds);
  _completeds = {};
  Object.keys(completeds).forEach((id) => {
    if (parseInt(id) !== completed.id){
      _completeds[id] = completeds[id];
    }
  })
  console.log(_completeds)
};

const resetCompleteds = function(completeds){
  _completeds = {};
  completeds.completeds.forEach((completed) => {
    _completeds[completed.id] = completed
  })
};

CompletedStore.all = function(){
  return Object.assign({}, _completeds);
};


module.exports = CompletedStore;

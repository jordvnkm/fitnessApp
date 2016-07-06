const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const ErrorConstants = require("../constants/error_constants");

let ErrorStore = new Store(AppDispatcher);

let _errors = [];

ErrorStore.__onDispatch = function(payload){
  if (payload.actionType === ErrorConstants.ERROR){
    setErrors(payload.errors);
    ErrorStore.__emitChange();
  }
  else {
    resetErrors();
  }
}

ErrorStore.all = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
  return null;
};

const resetErrors = function(){
  if (_errors && _errors.length === 0){
    return;
  }
  _errors = [];
  ErrorStore.__emitChange();
};


const setErrors = function(errors){
  _errors = errors;
};

module.exports = ErrorStore;

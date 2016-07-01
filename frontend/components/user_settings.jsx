const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const UserConstants = require("../constants/user_constants");
const hashHistory = require("react-router").hashHistory;

const UserSettings = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser()};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  componentWillReceiveProps: function(newProps){
    let user = UserStore.currentUser();
    if (parseInt(newProps.params.userId) !== user.id){
      alert("cannot view another users settings")
      hashHistory.push("/")
    }
    else {
      this.setState({currentUser: UserStore.currentUser()});
    }
  },

  updateUser: function(){
    let user = UserStore.currentUser();
    if (parseInt(this.props.params.userId) !== user.id){
      alert("cannot view another users settings")
      hashHistory.push("/")
    }
    else {
      this.setState({currentUser: UserStore.currentUser()});
    }
  },


  render: function(){
    let text = this.props.params.userId;
    return (
      <div>
        hello from settings
        {text}
      </div>

    );
  }
});


module.exports = UserSettings;

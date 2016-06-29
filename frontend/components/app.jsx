const React = require("react");
const UserStore = require("../stores/users_store");
const hashHistory = require("react-router").hashHistory;
const UserActions = require("../actions/user_actions");

const App = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser()};
  },

  logout: function(){

  },

  login: function(){
    hashHistory.push("/api/users")
  },

  button: function(){
    let buttonText;
    let funct;
    if (this.state.currentUser){
      buttonText = "Log Out"
      funct = this.logout;
    }
    else {
      buttonText = "Log In"
      funct = this.login;
    }
  },

  render: function(){
    let user;
    if (this.state.currentUser){
      user = <span>hello {window.currentUser}</span>
    }



    return (
      <div>
        {user}
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;

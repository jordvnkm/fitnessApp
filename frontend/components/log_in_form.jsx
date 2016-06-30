const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const hashHistory = require("react-router").hashHistory;

const LoginForm = React.createClass({

  getInitialState: function(){
    return {username: "", password: ""};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },


  updateUser: function(){
    if (!(UserStore.currentUser() === null)){
      hashHistory.push("/");
      return;
    }
    else{
      this.setState({userErrors: UserStore.errors()});
    }

  },

  usernameChange: function(event){
    this.setState({username: event.target.value});
  },

  passwordChange: function(event){
    this.setState({password: event.target.value});
  },

  onSubmit: function(event){
    event.preventDefault();
    UserActions.logIn({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    });
  },

  guestLogin: function(event){
    event.preventDefault();
    event.stopPropagation();
    UserActions.logIn({
      username: "guest",
      password: "password",
      email: "guest@guest.com"
    });
  },


  render: function(){
    return (
      <div className="modalForm">
        <form onSubmit={this.onSubmit}  className="loginForm">
          <label className="formText" value="Username">Username</label>
          <input className="formInput" type="text" onChange={this.usernameChange} value={this.state.username} />

          <label className="formText" value="Password">Password</label>
          <input className="formInput" type="password" onChange={this.passwordChange} value={this.state.password} />

          <div className="formSubmit">
            <input type="submit" value="Log In" />
            <span>&nbsp; &nbsp; Or &nbsp; &nbsp; </span>
            <button onClick={this.guestLogin}>Login as Guest</button>
          </div>
        </form>
      </div>
    );
  }
});




module.exports = LoginForm;

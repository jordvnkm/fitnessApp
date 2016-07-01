const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const hashHistory = require("react-router").hashHistory;
const Button = require("react-bootstrap").Button;

const SignUpForm = React.createClass({
  getInitialState: function(){
    return {username: "", password: "", email: ""};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  emailChange: function(event){
    this.setState({email: event.target.value});
  },


  updateUser: function(){
    if (UserStore.currentUser()){
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
    UserActions.signUp({
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
        <form onSubmit={this.onSubmit} className="loginForm">
          <label className="formText" >Username</label>
          <input className="formInput" type="text" onChange={this.usernameChange} value={this.state.username} />

          <label className="formText" >Email</label>
          <input className="formInput" type="text" onChange={this.emailChange} value={this.state.email}></input>
          <label className="formText" >Password</label>
          <input className="formInput" type="password" onChange={this.passwordChange} value={this.state.password}/>

          <div className="formSubmit">
            <Button type="submit">Sign Up</Button>
            <span>&nbsp; Or &nbsp;</span>
            <Button onClick={this.guestLogin}>Login as Guest</Button>
          </div>
        </form>
      </div>
    );
  }
});


module.exports = SignUpForm

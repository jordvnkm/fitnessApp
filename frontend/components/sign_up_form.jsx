const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const hashHistory = require("react-router").hashHistory;


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
    this.props.onSubmit();
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
    this.props.onSubmit();
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.onSubmit}  className="loginForm">
          <label className="formText" >Username</label>
          <input className="formInput" type="text" onChange={this.usernameChange} value={this.state.username} />
          <br></br>

          <label className="formText" >Email</label>
          <input className="formInput" type="text" onChange={this.emailChange} value={this.state.email}></input>
          <br></br>
          <label className="formText" >Password</label>
          <input className="formInput" type="password" onChange={this.passwordChange} value={this.state.password}/>
          <br></br>
          <input type="submit" value="Sign Up" />
          <span> Or </span>
          <button onClick={this.guestLogin} onSubmit={this.props.onSubmit}>Login as Guest</button>
        </form>
      </div>
    );
  }
});


module.exports = SignUpForm

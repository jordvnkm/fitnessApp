const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");

const LoginForm = React.createClass({
  getInitialState: function(){
    return {username: "", password: ""};
  },

  componentDidMount: function(){
    this.listener = UserStore.addListener(this.onChange);
  },

  usernameChange: function(event){
    this.setState({username: event.target.value});
  },

  passwordChange: function(event){
    this.setState({password: event.target.value});
  },

  onSubmit: function(){
    UserActions.signUp({
      username: this.state.username,
      password: this.state.password
    });
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label value="Username"></label>
          <input type="text" onChange={this.usernameChange} value={this.state.username} />

          <label value="Password"></label>
          <input type="password" onChange={this.passwordChange} value={this.state.password} />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
});




module.exports = LoginForm;

const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const hashHistory = require("react-router").hashHistory;


const SignUpForm = React.createClass({
  getInitialState: function(){
    return {username: "", password: "", currentUser: UserStore.currentUser(),
            userErrors: UserStore.errors()};
  },

  componentDidMount: function(){
    this.listener = UserStore.addListener(this.updateUser);
    if (UserStore.currentUser()){
      window.currentUser = UserStore.currentUser();
      hashHistory.push("/");
    }

  },


  updateUser: function(){
    if (UserStore.currentUser()){
      window.currentUser = UserStore.currentUser();
      hashHistory.push("/");
    }
    this.setState({userErrors: UserStore.errors()});
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

  errors: function(){
    if (!this.state.userErrors){
      return;
    }
    var self = this;
    return (<ul>
    {
      Object.keys(this.state.userErrors).map(function(key, i){
        return (<li key={i}>{self.state.userErrors[key]}</li>);
      })
    }
    </ul>);
  },

  render: function(){
    return (
      <div>
        {this.errors()}
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input type="text" onChange={this.usernameChange} value={this.state.username} />

          <br></br>
          <label>Password</label>
          <input type="password" onChange={this.passwordChange} value={this.state.password}/>
          <br></br>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
});


module.exports = SignUpForm

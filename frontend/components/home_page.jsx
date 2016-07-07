const React = require("react");
const Jumbotron = require("react-bootstrap").Jumbotron;
const Button = require("react-bootstrap").Button;
const UserStore = require("../stores/users_store");
const hashHistory = require("react-router").hashHistory;
const UserActions = require("../actions/user_actions");

const HomePage = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser()};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  updateUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },

  goToCreate: function(){
    hashHistory.push("/routes/create");
  },

  login: function(event){
    event.preventDefault();
    UserActions.logIn({
      username: "guest",
      password: "password"
    });
  },

  jumbotron: function(){
    let button;
    if (this.state && this.state.currentUser){
      button = <Button onClick={this.goToCreate}>Create Route</Button>
    }
    else {
      button = <Button onClick={this.login}>Guest login</Button>
    }
    return (
      <Jumbotron >
        <h1 className="homepageHeader">hello</h1>
        <p> world</p>
        {button}
      </Jumbotron>
    )
  },


  render: function(){
    return (
      <div className="homePage">
        {this.jumbotron()}

      </div>
    )
  }
});


module.exports = HomePage;

const React = require("react");
const Jumbotron = require("react-bootstrap").Jumbotron;
const Button = require("react-bootstrap").Button;
const UserStore = require("../stores/users_store");
const hashHistory = require("react-router").hashHistory;
const UserActions = require("../actions/user_actions");

const PopularProfilesIndex = require("./popular_profiles_index");
const UserSearchBar = require("./user_search_bar");


const Navbar = require("react-bootstrap").Navbar;
const Nav = require("react-bootstrap").Nav;
const NavItem = require("react-bootstrap").NavItem;
const NavDropdown = require("react-bootstrap").NavDropdown;
const MenuItem = require("react-bootstrap").MenuItem;
const FormGroup = require("react-bootstrap").FormGroup;
const FormControl = require("react-bootstrap").FormControl;

const HomePage = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser(), userText: "", allUsers: UserStore.all()};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
    UserActions.fetchAllUsers();
    $("video")[0].play();
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  updateUser: function(){
    this.setState({currentUser: UserStore.currentUser(), allUsers: UserStore.all()});
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
      button = <Button className="jumboButton" onClick={this.goToCreate}>Create Route</Button>
    }
    else {
      button = <Button className="jumboButton" onClick={this.login}>Guest login</Button>
    }
    return (
      <div className="splashJumbo">
        <h1 className="jumboHeader">hello</h1>
        <p className="jumboContent">world</p>
        {button}
      </div>
    )
  },


  userTextChange: function(text){
    this.setState({userText: text})
  },

  getUserid: function(name){
    let id = 0;
    this.state.allUsers.forEach((user) => {
      if (user.username === name){
        id = user.id
      }
    });
    return id;
  },


  searchUsers: function(event){
    if (event){
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.state.userText === ""){
      return;
    }

    let userId = this.getUserid(this.state.userText);
    hashHistory.push(`users/${userId}`);
  },

  userSearchBar: function(){
    return (
      <Navbar>
        <Nav>
          <Navbar.Form  pullLeft>
            <form >
              <FormGroup>
                <UserSearchBar onsubmit={this.searchUsers} textChange={this.userTextChange} text={this.state.userText} users={this.state.allUsers}/>
              </FormGroup>
            </form>
          </Navbar.Form>
          <NavItem onClick={this.searchUsers}>Search</NavItem>
        </Nav>
      </Navbar>
    );
  },

  popularProfiles: function(){
    return (
      <PopularProfilesIndex profiles={UserStore.popularUsers()}/>
    )
  },

  backgroundVideo: function(){
    return (
      <div className="video-container">
        <video id="splashVideo" src="http://res.cloudinary.com/dyfgfvczc/video/upload/ac_none/v1467913952/runningvideo_zfuslx.mp4" loop></video>
      </div>
    )
  },

  render: function(){
    return (
      <div className="homePage">
        <div className="splashHeader">
          {this.backgroundVideo()}
          {this.jumbotron()}
        </div>
        <div className="splashContent">
          {this.userSearchBar()}
          {this.popularProfiles()}
        </div>
      </div>
    )
  }
});


module.exports = HomePage;

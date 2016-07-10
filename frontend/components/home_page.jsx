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
const Carousel = require("react-bootstrap").Carousel;

const HomePage = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser(), userText: "", allUsers: UserStore.all()};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
    UserActions.fetchAllUsers();
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
    let content;
    let button;
    if (this.state && this.state.currentUser){
      content = (
        <Carousel.Caption>
          <h1 className="jumboHeader">Hello {this.state.currentUser.username}</h1>
          <p className="jumboContent">Share your favorite routes with the world</p>
          <Button className="jumboButton" onClick={this.goToCreate}>Create Route</Button>
        </Carousel.Caption>
      )
    }
    else {
      content = (
        <Carousel.Caption>
          <h1 className="jumboHeader">Go The Distance</h1>
          <p className="jumboContent">Find, create, and share running routes</p>
          <Button className="jumboButton" onClick={this.login}>Guest login</Button>
        </Carousel.Caption>
      )
    }
    return content;
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
      <Navbar inverse>
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

  backgroundCarousel: function(){
    // <div className="video-container">
    // </div>
    return (
      <Carousel>
        <Carousel.Item>
          {this.jumbotron()}
          <img className="carouselImage" src="http://res.cloudinary.com/dyfgfvczc/image/upload/c_crop,q_100,w_1141,x_0,y_330/v1468110768/running_in_the_sunset_wallpaper_hd_xu9ir9.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImage" src="http://res.cloudinary.com/dyfgfvczc/image/upload/q_100/v1468110609/Running_Wallpaper_yjnwio.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImage" src="http://res.cloudinary.com/dyfgfvczc/image/upload/c_crop,q_100,w_1357,x_547,y_645/v1468110609/Running_Wallpaper_yjnwio.jpg"/>
        </Carousel.Item>
      </Carousel>
    )
  },

  render: function(){
    // {this.jumbotron()}
    return (
      <div className="homePage">
        <div className="splashHeader">
          {this.backgroundCarousel()}
        </div>
        {this.userSearchBar()}
        <div className="splashContent">
          <h2 className="popularHeading">Popular Profiles</h2>
          {this.popularProfiles()}
        </div>
      </div>
    )
  }
});


module.exports = HomePage;

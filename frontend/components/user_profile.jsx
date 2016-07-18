const React = require("react");
const ProfileStore = require("../stores/profile_store");
const ProfileActions = require("../actions/profile_actions");
const CompletedRoutesIndex = require("./completed_routes_index");
const FavoriteRoutesIndex = require("./favorite_routes_index");
const AuthoredRoutesIndex = require("./authored_routes_index");
const hashHistory = require("react-router").hashHistory;
const ProfileMap = require("./profile_map");
const WaypointActions = require("../actions/waypoint_actions");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const FollowActions = require("../actions/follow_actions");
const FollowsStore = require("../stores/follows_store");
const FollowersIndex = require("./followers_index");



const ButtonToolbar = require("react-bootstrap").ButtonToolbar;
const Button = require("react-bootstrap").Button;
const MenuItem = require("react-bootstrap").MenuItem;
const Tabs = require("react-bootstrap").Tabs;
const Tab = require("react-bootstrap").Tab;


const UserProfile = React.createClass({
  getInitialState: function(){
    return {profile: ProfileStore.find(this.props.params.userId), currentUser: UserStore.currentUser(),
            following: null, followedSection: "followers"};

  },


  componentDidMount: function(){
    this.profileListener = ProfileStore.addListener(this.profileChange);
    this.userListener = UserStore.addListener(this.userChange);
    this.followListener = FollowsStore.addListener(this.followChange);
    ProfileActions.fetchProfile(this.props.params.userId);
    FollowActions.fetchFollowsForUser(this.props.params.userId);
  },

  componentWillReceiveProps: function(newProps){
    ProfileActions.fetchProfile(newProps.params.userId);
    // UserActions.fetchCurrentUser();
    FollowActions.fetchFollowsForUser(newProps.params.userId)
  },

  componentWillUnmount: function(){
    this.profileListener.remove();
    this.userListener.remove();
    this.followListener.remove();
  },

  followChange: function(){
    if (this.state.profile && this.state.currentUser){
      this.setState({following: FollowsStore.find(this.state.profile.user.id, this.state.currentUser.id)});
    }
  },

  userChange: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },

  profileChange: function(){
    this.setState({profile: ProfileStore.find(this.props.params.userId)});
  },


  routes: function(){
    let routesIndexes = null;
    if (this.state.profile){
      routesIndexes = <div className="routesIndexes">
        <div className="routesHeader"><h2>Routes</h2></div>
        <div className="routesSpecialInline">
          <h5>Completed Count: {this.state.profile.completed_routes.length}</h5>
          <h5>Favorited Count: {this.state.profile.favorite_routes.length}</h5>
        </div>
        <h5>Authored Count: {this.state.profile.authored_routes.length}</h5>
        <Tabs defaultActiveKey={1} id="routesIndexTabs">
          <Tab eventKey={1} title="Completed">
            <CompletedRoutesIndex routes={this.state.profile.completed_routes}/>

          </Tab>
          <Tab eventKey={2} title="Favorites">
            <FavoriteRoutesIndex routes={this.state.profile.favorite_routes}/>

          </Tab>
          <Tab eventKey={3} title="Authored">
            <AuthoredRoutesIndex routes={this.state.profile.authored_routes}/>

          </Tab>
        </Tabs>
      </div>
    }
    return routesIndexes;
  },

  createRoute: function(){
    hashHistory.push(`/routes/create`)
  },


  createFollow: function(){
    FollowActions.createFollow({
      user_id: this.props.params.userId,
      fan_id: this.state.currentUser.id
    })
  },

  removeFollow: function(event){
    event.preventDefault();
    FollowActions.deleteFollow(this.state.following.id);
  },

  isFollowing: function(){
    let followers = this.state.profile.followers;
    let answer = false;
    followers.forEach((user) => {
      if (user.id === this.state.currentUser.id){
        answer = true;
      }
    });

    return answer;
  },

  followButton: function(){
    if (this.state.currentUser && this.state.profile){
      if (this.state.currentUser.id !== parseInt(this.props.params.userId) && !this.state.following){
        return <Button className="followButton" onClick={this.createFollow}>Follow this runner</Button>
      }
      else if (this.state.currentUser.id !== parseInt(this.props.params.userId)){
        return <Button className="followButton" onClick={this.removeFollow}>Unfollow this runner</Button>
      }
    }
  },

  createRouteButton: function(){
    if (this.state.currentUser && this.state.currentUser.id === parseInt(this.props.params.userId)){
      return <Button onClick={this.createRoute}>CreateRoute</Button> ;
    }
  },


  followersList: function(){
    if (this.state.currentUser){
      let followings = FollowsStore.allUserFollowers();
      let followers = [];
      followings.forEach((following) => {
        followers.push(following.fan);
      })
      return followers;
    }
    else if (this.state.profile){
      return this.state.profile.followers;
    }
  },

  followingsList: function(){
    if (this.state.currentUser){
      let followings = FollowsStore.allFollowingsAsFan();
      let followed = [];
      followings.forEach((following) => {
        followed.push(following.user);
      })
      return followed;
    }
    else if (this.state.profile){
      return this.state.profile.followed_users;
    }
  },

  userNavButtons: function(){
    if (this.state.profile){
      let profileName = this.state.profile.user.username;
      return (
        <div className="userToolbar">
          <div className="personalInfo">
            <img className="mainProfilePic" src={this.state.profile.user.profile_img_url}/>
            <div className="profileStatistics">
              <h2 id="profileUsername">{profileName}</h2>
              <h5>Follower Count: {this.followersList().length}</h5>
              <h5>Followed Profile Count: {this.followingsList().length}</h5>
            </div>
          </div>
          <Tabs defaultActiveKey={1} id="followingTab">
            <Tab eventKey={1} title="Following"><FollowersIndex emptyText="Followed Profiles" users={this.followingsList()}/></Tab>
            <Tab eventKey={2} title="Followers"><FollowersIndex emptyText="Followers" users={this.followersList()}/></Tab>
          </Tabs>
        </div>
      );
    }

  },

  aggregateRoutes: function(){
    const myCompleted = this.state.profile.completed_routes;
    const myFavorited = this.state.profile.favorite_routes;
    const myAuthored = this.state.profile.authored_routes;
    return {completed: myCompleted, favorited: myFavorited, authored: myAuthored};
  },

  profileMap: function(){
    if (this.state.profile){
      return <ProfileMap location={this.state.profile.home_location} routes={this.aggregateRoutes()}/>
    }
  },


  render: function(){
    if (parseInt(this.props.params.userId) == 0){
      return <div className="profileError"><h1>User not found</h1></div>
    }
    return (
      <div className="userProfile">
        {this.followButton()}
        {this.profileMap()}
        <div className="userInfo">
          {this.routes()}
          {this.userNavButtons()}
        </div>
      </div>
    );
  }
});

module.exports = UserProfile;

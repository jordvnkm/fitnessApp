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

const ButtonToolbar = require("react-bootstrap").ButtonToolbar;
const Button = require("react-bootstrap").Button;
const MenuItem = require("react-bootstrap").MenuItem;



const UserProfile = React.createClass({
  getInitialState: function(){
    return {profile: ProfileStore.find(this.props.params.userId), currentUser: UserStore.currentUser(),
            following: null};

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
    UserActions.fetchCurrentUser();
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
          <CompletedRoutesIndex routes={this.state.profile.completed_routes}/>
          <FavoriteRoutesIndex routes={this.state.profile.favorite_routes}/>
          <AuthoredRoutesIndex routes={this.state.profile.authored_routes}/>
        </div>
    }
    return routesIndexes;
  },

  createRoute: function(){
    hashHistory.push(`/routes/create`)
  },


  createFollow: function(){
    console.log("create follow clicked");
    FollowActions.createFollow({
      user_id: this.props.params.userId,
      fan_id: this.state.currentUser.id
    })
  },

  removeFollow: function(){
    FollowActions.deleteFollow(this.state.following.id);
  },

  followedProfiles: function(){
    console.log("followed profiles clicked");
    console.log(this.state.profile);
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
        return <Button onClick={this.createFollow}>Follow this profile</Button>
      }
      else if (this.state.currentUser.id !== parseInt(this.props.params.userId)){
        return <Button onClick={this.removeFollow}>Unfollow this profile</Button>
      }
    }
  },

  createRouteButton: function(){
    if (this.state.currentUser && this.state.currentUser.id === parseInt(this.props.params.userId)){
      return <Button onClick={this.createRoute}>CreateRoute</Button> ;
    }
  },

  userNavButtons: function(){

    return (
      <div className="userToolbar">
        <ButtonToolbar>
          {this.createRouteButton()}
          {this.followButton()}
          <Button onClick={this.followedProfiles}>Followed Profiles</Button>
        </ButtonToolbar>
      </div>
    );
  },

  aggregateRoutes: function(){
    const myCompleted = this.state.profile.completed_routes;
    const myFavorited = this.state.profile.favorite_routes;
    const myAuthored = this.state.profile.authored_routes;
    return {completed: myCompleted, favorited: myFavorited, authored: myAuthored};
  },

  profileMap: function(){
    if (this.state.profile){
      return <ProfileMap routes={this.aggregateRoutes()}/>
    }
  },

  render: function(){
    return (
      <div className="userProfile">
        {this.userNavButtons()}
        {this.profileMap()}
        {this.routes()}
      </div>
    );
  }
});

module.exports = UserProfile;

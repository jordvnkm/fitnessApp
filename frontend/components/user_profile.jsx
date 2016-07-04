const React = require("react");
const ProfileStore = require("../stores/profile_store");
const ProfileActions = require("../actions/profile_actions");
const CompletedRoutesIndex = require("./completed_routes_index");
const FavoriteRoutesIndex = require("./favorite_routes_index");
const AuthoredRoutesIndex = require("./authored_routes_index");
const hashHistory = require("react-router").hashHistory;
const ProfileMap = require("./profile_map");
const WaypointActions = require("../actions/waypoint_actions");


const ButtonToolbar = require("react-bootstrap").ButtonToolbar;
const Button = require("react-bootstrap").Button;
const MenuItem = require("react-bootstrap").MenuItem;



const UserProfile = React.createClass({
  getInitialState: function(){
    return {profile: ProfileStore.find(this.props.params.userId)};
  },
  componentDidMount: function(){
    this.profileListener = ProfileStore.addListener(this.profileChange);
    ProfileActions.fetchProfile(this.props.params.userId);
  },

  componentWillUnmount: function(){
    this.profileListener.remove();
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

  followedProfiles: function(){
    console.log("followed profiles clicked");
  },

  userNavButtons: function(){
    return (
      <div className="userToolbar">
        <ButtonToolbar>
          <Button onClick={this.createRoute}>CreateRoute</Button>
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

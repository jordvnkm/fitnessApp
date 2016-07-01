const React = require("react");
const ProfileStore = require("../stores/profile_store");
const ProfileActions = require("../actions/profile_actions");
const CompletedRoutesIndex = require("./completed_routes_index");
const FavoriteRoutesIndex = require("./favorite_routes_index");
const AuthoredRoutesIndex = require("./authored_routes_index");
const hashHistory = require("react-router").hashHistory;


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

  profileChange: function(){
    this.setState({profile: ProfileStore.find(this.props.params.userId)});
  },

  componentWillUnmount: function(){
    this.profileListener.remove();
  },

  routes: function(){
    let routesIndexes = null;
    if (this.state.profile){
      routesIndexes = <div className="RoutesIndexes">
          <CompletedRoutesIndex routes={this.state.profile.completed_routes}/>
          <FavoriteRoutesIndex routes={this.state.profile.favorite_routes}/>
          <AuthoredRoutesIndex routes={this.state.profile.authored_routes}/>
        </div>
    }
    return routesIndexes;
  },

  createRoute: function(){
    console.log("create route clicked");
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

  render: function(){
    let text = `hello userid = ${this.props.params.userId}`;
    return (
      <div>
        {this.userNavButtons()}
        {this.routes()}
      </div>
    );
  }
});

module.exports = UserProfile;

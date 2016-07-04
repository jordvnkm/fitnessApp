const React = require("react");
const RouteActions = require("../actions/route_actions");
const RouteStore = require("../stores/routes_store");
const RouteDetailMap = require("./route_detail_map");
const Button = require("react-bootstrap").Button;
const UserStore = require('../stores/users_store');
const UserActions = require("../actions/user_actions");
const hashHistory = require("react-router").hashHistory;

const FavoriteActions = require("../actions/favorite_actions");
const FavoriteStore = require("../stores/favorites_store");

const RouteDetail = React.createClass({
  getInitialState: function(){
    return {route: null, currentUser: UserStore.currentUser(),
            favorite: null};
  },

  componentDidMount: function(){
    this.routeListener = RouteStore.addListener(this.updateRoute);
    this.userListener = UserStore.addListener(this.updateUser);
    this.favoriteListener = FavoriteStore.addListener(this.updateFavorite);
    RouteActions.fetchRoute(this.props.params.routeId);
    UserActions.fetchCurrentUser();
  },

  updateFavorite: function(){
    this.setState({favorite: FavoriteStore.find(this.state.currentUser.id, this.state.route.id)});
  },

  updateUser: function(){
    FavoriteActions.fetchFavoritesForUser(this.state.currentUser.id);
    this.setState({currentUser: UserStore.currentUser()});
  },

  updateRoute: function(){
    if (RouteStore.find(this.props.params.routeId)){
      this.setState({route: RouteStore.find(this.props.params.routeId)});
    }
    else {
      hashHistory.push(`/users/${this.state.currentUser.id}`);
    }
  },

  componentWillUnmount: function(){
    this.routeListener.remove();
    this.userListener.remove();
    this.favoriteListener.remove();
  },

  map: function(){
    if (this.state.route){
      return <RouteDetailMap waypoints={this.state.route.waypoints} />;
    }
  },

  deleteRoute: function(){
    RouteActions.deleteRoute(this.state.route.id);
  },

  deleteButton: function(){
    if (this.state.route){
      if (this.state.route.author.id === this.state.currentUser.id){
        return (
          <Button onClick={this.deleteRoute}>Delete Route</Button>
        );
      }
    }
  },

  addFavorite: function(){
    FavoriteActions.createFavorite({
      user_id: this.state.currentUser.id,
      route_id: this.state.route.id
    })
    console.log("add favorite clicked");
  },

  removeFavorite: function(){
    FavoriteActions.deleteFavorite(this.state.favorite);
    console.log("remove favorite clicked");
  },

  favoriteButton: function(){
    if (this.state.route){
      console.log(this.state.favorite)
      if (this.state.favorite){
        return (
          <Button onClick={this.removeFavorite}>Unfavorite</Button>
        );
      }
      else {
        return (
          <Button onClick={this.addFavorite}>Favorite route</Button>
        );
      }
    }
  },

  addCompleted: function(){
    console.log(this.state.currentUser);
    console.log("add completed clicked");
  },

  completedButton: function(){
    if (this.state.route){
      if (!this.state.currentUser.completed.includes(this.state.route.id)){
        return (
          <Button onClick={this.addCompleted}>Mark route as completed</Button>
        );
      }
    }
  },

  render: function(){
    let text;
    if (this.state.route){
      text = this.state.route.name;
    }
    return (
      <div>
        hello from route detail {text}
        {this.deleteButton()}
        {this.favoriteButton()}
        {this.completedButton()}
        {this.map()}
      </div>
    );
  }
});


module.exports = RouteDetail;

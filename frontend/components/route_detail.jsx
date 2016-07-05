const React = require("react");
const RouteActions = require("../actions/route_actions");
const RouteStore = require("../stores/routes_store");
const RouteDetailMap = require("./route_detail_map");
const Button = require("react-bootstrap").Button;
const UserStore = require('../stores/users_store');
const UserActions = require("../actions/user_actions");
const hashHistory = require("react-router").hashHistory;

const CommentsForm = require("./comments_form");
const FavoriteActions = require("../actions/favorite_actions");
const FavoriteStore = require("../stores/favorites_store");
const CompleteActions = require("../actions/complete_actions");
const CompletedStore = require("../stores/completed_store");

const RouteDetail = React.createClass({
  getInitialState: function(){
    return {route: null, currentUser: UserStore.currentUser(),
            favorite: null, completed: null};
  },

  componentDidMount: function(){
    this.routeListener = RouteStore.addListener(this.updateRoute);
    this.favoriteListener = FavoriteStore.addListener(this.updateFavorite);
    this.completedListener = CompletedStore.addListener(this.updateCompleted);
    RouteActions.fetchRoute(this.props.params.routeId);
  },

  updateCompleted: function(){
    if (CompletedStore.find(this.state.currentUser.id, this.state.route.id)){
      this.setState({completed: CompletedStore.find(this.state.currentUser.id, this.state.route.id)});
    }
    else{
      this.setState({completed: undefined});
    }
  },

  updateFavorite: function(){
    if (FavoriteStore.find(this.state.currentUser.id, this.state.route.id)){
      this.setState({favorite: FavoriteStore.find(this.state.currentUser.id, this.state.route.id)});
    }
    else{
      this.setState({favorite: undefined});
    }
  },

  updateUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },

  updateRoute: function(){
    if (RouteStore.find(this.props.params.routeId)){
      if (this.state.currentUser){
        FavoriteActions.fetchFavoritesForUser(this.state.currentUser.id);
        CompleteActions.fetchCompletedForUser(this.state.currentUser.id);
      }
      this.setState({route: RouteStore.find(this.props.params.routeId)});
    }
    else {
      hashHistory.push(`/users/${this.state.currentUser.id}`);
    }
  },

  componentWillUnmount: function(){
    this.routeListener.remove();
    this.favoriteListener.remove();
    this.completedListener.remove();
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
    if (this.state.route && this.state.currentUser){
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
  },

  removeFavorite: function(){
    FavoriteActions.deleteFavorite(this.state.favorite);
  },

  favoriteButton: function(){
    if (this.state.route && this.state.currentUser){
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
    let today = new Date();

    CompleteActions.createCompleted({
      route_id: this.state.route.id,
      user_id: this.state.currentUser.id,
      date: today
    });
  },

  removeCompleted: function(){
    CompleteActions.deleteCompleted(this.state.completed.id);
  },

  completedButton: function(){
    if (this.state.route && this.state.currentUser){
      if (this.state.completed){
        return (
          <Button onClick={this.removeCompleted}>Mark as not completed</Button>
        );
      }
      else {
        return (
          <Button onClick={this.addCompleted}>Mark route as completed</Button>
        );
      }
    }
  },

  commentsForm: function(){
    if (this.state.route){
      return <CommentsForm routeId={this.state.route.id}/>;
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
        {this.commentsForm()}
      </div>
    );
  }
});


module.exports = RouteDetail;

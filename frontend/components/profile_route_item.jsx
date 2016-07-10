const React = require("react");
const Waypoint = require("./waypoint");
const hashHistory = require("react-router").hashHistory;
const ListGroupItem = require("react-bootstrap").ListGroupItem;

const ProfileRouteItem = React.createClass({
  showDetail: function(){
    hashHistory.push(`/routes/${this.props.route.id}`)
  },

  render: function(){
    return (
      <div className="routeInfo" onClick={this.showDetail}>
        <img className="routeAuthorImage" src={this.props.route.author.profile_img_url}/>
        <div className="miniRouteInfo" >
          <h4>{this.props.route.name}</h4>
          <p>Location: {this.props.route.location} , Favorite Count: {this.props.route.favorite_count}</p>
        </div>
      </div>
    );
  }
});


module.exports = ProfileRouteItem;

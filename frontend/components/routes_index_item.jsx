const React = require("react");
const Waypoint = require("./waypoint");
const hashHistory = require("react-router").hashHistory;

const RouteIndexItem = React.createClass({
  showDetail: function(){
    hashHistory.push(`/routes/${this.props.route.id}`)
  },

  render: function(){
    return (
      <div onClick={this.showDetail} className="routeIndexItem">
        <h5>Route Name:</h5>
        {this.props.route.name}
        <h5>Author Id:</h5>
        {this.props.route.author_id}
        <h5>Location</h5>
        {this.props.route.location}
        <Waypoint waypoint={this.props.route.waypoints[0]}/>
      </div>
    );
  }
});


module.exports = RouteIndexItem;

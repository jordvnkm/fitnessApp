const React = require("react");
const Waypoint = require("./waypoint");

const RouteIndexItem = React.createClass({
  render: function(){
    return (
      <div>
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

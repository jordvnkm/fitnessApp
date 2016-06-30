const React = require("react");


const Waypoint = React.createClass({
  render: function(){
    return (
      <div>
        <h4>Starting waypoint</h4>
        <h5>Latitude</h5>
        {this.props.waypoint.lat}
        <h5>Longitude</h5>
        {this.props.waypoint.lng}
        <h5>Route Id: </h5>
        {this.props.waypoint.route_id}
      </div>
    );
  }
});


module.exports = Waypoint;

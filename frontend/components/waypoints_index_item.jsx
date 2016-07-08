const React = require("react");


const WaypointsIndexItem = React.createClass({

  lat: function(){
    return Math.round(this.props.latLng.lat() * 1000)/1000;
  },

  lng: function(){
    return Math.round(this.props.latLng.lng() * 1000)/1000;
  },

  render: function(){
    return (
      <div className="waypointIndexItem">
        <h5 className="waypointsHeader">{this.props.order}.   Latitude: {this.lat()}   Longitude: {this.lng()}</h5>
      </div>
    )
  }
});



module.exports = WaypointsIndexItem;

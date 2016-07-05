const React = require("react");
const Waypoint = require("./waypoint");
const hashHistory = require("react-router").hashHistory;
const ListGroupItem = require("react-bootstrap").ListGroupItem;
const RouteIndexItem = React.createClass({
  showDetail: function(){
    hashHistory.push(`/routes/${this.props.route.id}`)
  },

  render: function(){
    return (
      <ListGroupItem onClick={this.showDetail} header={this.props.route.name}>{this.props.route.location}</ListGroupItem>
    );
  }
});


module.exports = RouteIndexItem;

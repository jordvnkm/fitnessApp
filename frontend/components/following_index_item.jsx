const React = require("react");
const ListGroupItem = require("react-bootstrap").ListGroupItem;
const hashHistory = require("react-router").hashHistory;

const FollowingIndexItem = React.createClass({

  goToProfile: function(){
    hashHistory.push(`/users/${this.props.user.id}`);
  },

  render: function(){
    return (
      <ListGroupItem onClick={this.goToProfile} header={this.props.user.username}>FollowCount: {this.props.user.follower_count}</ListGroupItem>
    );
  }
});


module.exports = FollowingIndexItem;

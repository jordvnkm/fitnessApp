const React = require("react");
const ListGroupItem = require("react-bootstrap").ListGroupItem;
const hashHistory = require("react-router").hashHistory;

const FollowingIndexItem = React.createClass({

  goToProfile: function(){
    hashHistory.push(`/users/${this.props.user.id}`);
  },

  render: function(){
    return (
      <div onClick={this.goToProfile} className="userListGroup">
        <img className="userListImage" src={this.props.user.profile_img_url} />
        <div className="miniUserInfo">
          <h4>{this.props.user.username}</h4>
          <p>{this.props.user.follower_count} followers</p>
        </div>
      </div>
    );
  }
});


module.exports = FollowingIndexItem;

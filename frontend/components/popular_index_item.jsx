const React = require("react");
const Thumbnail = require("react-bootstrap").Thumbnail;
const hashHistory = require("react-router").hashHistory;

const PopularIndexItem = React.createClass({


  profileClick: function(){
    hashHistory.push(`/users/${this.props.user.id}`);
  },

  render: function(){
    return (
      <div onClick={this.profileClick} className="thumbNail">
        <div className="thumb-photo-container">
          <img className="thumb-photo" src={this.props.user.profile_img_url}></img>
        </div>
        <div className="popularInfo">
          <h3 className="popularName">{this.props.user.username}</h3>
          <p className="popularFollowers">{this.props.user.follower_count} followers</p>
        </div>
      </div>
    )
  }
});



module.exports = PopularIndexItem;

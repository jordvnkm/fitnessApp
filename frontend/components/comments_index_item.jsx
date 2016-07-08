const React = require("react");


const CommentsIndexItem = React.createClass({

  render: function(){
    return (
      <div className="commentItem">
        <img className="commentListImage" src={this.props.comment.author.profile_img_url} />
        <div className="commentContent">
          <h5 className="commentHeader">{this.props.comment.author.username}</h5>
          <p className="commentText">{this.props.comment.content}</p>
        </div>
      </div>
    )
  }
});

module.exports = CommentsIndexItem;

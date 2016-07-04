const React = require("react");
const CommentsStore = require("../stores/comments_store");
const CommentActions = require("../actions/comment_actions");

const CommentsForm = React.createClass({
  getInitialState: function(){
    return {comments: CommentsStore.all()};
  },


  componentDidMount: function(){
    this.commentListener = CommentsStore.addListener(this.commentChange);
    CommentActions.fetchCommentsForRoute(this.props.routeId);
  },

  componentWillUnmount: function(){
    this.commentListener.remove();
  },

  commentChange: function(){
    this.setState({comments: CommentsStore.all()})
  },

  comments: function(){
    return (
      <ul>
        {
          this.state.comments.map((comment)=>{
            return <li key={comment.id}>{comment.content}</li>
          })
        }
      </ul>
    )
  },

  render: function(){
    return(
      <div>
        hello from comments form
        {this.comments}
      </div>
    );

  }
});


module.exports = CommentsForm;

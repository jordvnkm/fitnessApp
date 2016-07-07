const React = require("react");
const CommentsStore = require("../stores/comments_store");
const CommentActions = require("../actions/comment_actions");
const UserStore = require("../stores/users_store");

const Button = require("react-bootstrap").Button;
const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;
const Panel = require("react-bootstrap").Panel;

const CommentsForm = React.createClass({
  getInitialState: function(){
    return {comments: CommentsStore.all(), currentUser: UserStore.currentUser(),
            commentContent: ""};
  },


  componentDidMount: function(){
    this.commentListener = CommentsStore.addListener(this.commentChange);
    CommentActions.fetchCommentsForRoute(this.props.routeId);
  },

  componentWillUnmount: function(){
    this.commentListener.remove();
  },

  commentChange: function(){
    this.setState({comments: CommentsStore.all(), commentContent: ""});
  },

  comments: function(){
    return (
      <ul>
        {
          Object.keys(this.state.comments).map((commentid)=>{
            return <li key={commentid}>{this.state.comments[commentid].content}
                   author: {this.state.comments[commentid].author.username}</li>
          })
        }
      </ul>
    )
  },

  contentChange: function(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({commentContent: event.target.value});
  },

  createComment: function(event){
    event.preventDefault();
    event.stopPropagation();
    CommentActions.createComment({
      author_id: this.state.currentUser.id,
      content: this.state.commentContent,
      route_id: this.props.routeId
    });
  },

  form: function(){
    if (this.state.currentUser){
      return (
        <Panel header="Add Comment">
          <form onSubmit={this.createComment}>
            <FormGroup controlId="formBasicText">
              <FormControl type="text" value={this.state.commentContent}
                onChange={this.contentChange} placeholde="Enter comment"/>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </Panel>
      )
    };
  },

  render: function(){
    if (this.state.currentUser){
      return(
        <div>
          {this.comments()}
          {this.form()}
        </div>
      );
    }
    else {
      return (
        <div>
          sign in to comment
        </div>
      )
    }

  }
});


module.exports = CommentsForm;

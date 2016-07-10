const React = require("react");
const CommentsStore = require("../stores/comments_store");
const CommentActions = require("../actions/comment_actions");
const UserStore = require("../stores/users_store");
const CommentsIndexItem = require("./comments_index_item");

const Button = require("react-bootstrap").Button;
const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;
const Panel = require("react-bootstrap").Panel;

const ListGroup = require("react-bootstrap").ListGroup;
const ListGroupItem = require("react-bootstrap").ListGroupItem;

const CommentsForm = React.createClass({
  getInitialState: function(){
    return {comments: CommentsStore.all(), currentUser: UserStore.currentUser(),
            commentContent: ""};
  },


  componentDidMount: function(){
    this.commentListener = CommentsStore.addListener(this.commentChange);
    this.userListener = UserStore.addListener(this.updateUser);
    CommentActions.fetchCommentsForRoute(this.props.routeId);
  },

  updateUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },

  componentWillUnmount: function(){
    this.commentListener.remove();
    this.userListener.remove();
  },

  commentChange: function(){
    this.setState({comments: CommentsStore.all(), commentContent: ""});
  },

  comments: function(){
    return (
      <ListGroup className="commentsList">
        {
          Object.keys(this.state.comments).map((commentid)=>{
            return <CommentsIndexItem key={commentid} comment={this.state.comments[commentid]} />
          })
        }
      </ListGroup>
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
        <Panel className="commentPanel" header="Comments">
          {this.comments()}
          <h4>Add Comment</h4>
          <form onSubmit={this.createComment}>
            <FormGroup controlId="formBasicText">
              <FormControl type="text" value={this.state.commentContent}
                onChange={this.contentChange} placeholde="Enter comment"/>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </Panel>
      )
    }
    else {
      return (
        <Panel className="commentPanel" header="Comments">
          {this.comments()}
          <h4>Sign in to comment</h4>
        </Panel>
      )
    }
  },

  render: function(){

    return(
      <div className="commentsForm">
        {this.form()}
      </div>
    )
    // if (this.state.currentUser){
    //   return(
    //     <div className="commentsForm">
    //       {this.form()}
    //     </div>
    //   );
    // }
    // else {
    //   return (
    //     <div className= "commentsForm">
    //       <h4>sign in to comment</h4>
    //     </div>
    //   )
    // }

  }
});


module.exports = CommentsForm;

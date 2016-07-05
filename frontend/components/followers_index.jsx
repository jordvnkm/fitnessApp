const React = require("react");
const ListGroup = require("react-bootstrap").ListGroup;
const ListGroupItem = require("react-bootstrap").ListGroupItem;
const FollowingIndexItem = require("./following_index_item");

const FollowersIndex = React.createClass({

  render: function(){
    if (this.props.users.length === 0){
      return <ListGroup><ListGroupItem>No {this.props.emptyText}</ListGroupItem></ListGroup>
    }
    return (
      <div>
        <ListGroup>
          {
            this.props.users.map((user)=>{
              return <FollowingIndexItem key={user.id} user={user}/>
            })
          }
        </ListGroup>
      </div>
    );
  }
});



module.exports = FollowersIndex;

const React = require("react");
const ProfileRouteItem = require("./profile_route_item");
const ListGroup = require("react-bootstrap").ListGroup;
const ListGroupItem = require("react-bootstrap").ListGroupItem


const CompletedRoutesIndex = React.createClass({

  routesIndexItems: function(){
    if (this.props.routes.length === 0){
      return <ListGroup><ListGroupItem>No Completed Routes</ListGroupItem></ListGroup>
    }
    return (
      <ListGroup>
        {
          this.props.routes.map((route) => {
            return <ProfileRouteItem key={route.id} route={route}/>
          })
        }
      </ListGroup>
    );
  },

  render: function(){
    return (
      <div className="routesIndex">
        {this.routesIndexItems()}
      </div>
    );
  }
});


module.exports = CompletedRoutesIndex;

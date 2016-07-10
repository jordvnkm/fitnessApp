const React = require("react");
const RoutesIndexItem = require("./routes_index_item");
const ListGroup = require("react-bootstrap").ListGroup;
const ListGroupItem = require("react-bootstrap").ListGroupItem

const RoutesIndex = React.createClass({

  routesIndexItems: function(){
    if (this.props.routes && this.props.routes.length === 0){
      return <ListGroup><ListGroupItem  header="No routes for this location"></ListGroupItem></ListGroup>
    }
    else if (this.props.routes){
      return (
        <ListGroup>
          {
            this.props.routes.map((route) => {
              return <RoutesIndexItem key={route.id} route={route}/>
            })
          }
        </ListGroup>
      );
    }
  },

  render: function(){
    return (
      <div className="routesIndex">
        {this.routesIndexItems()}
      </div>
    )
  }
});



module.exports = RoutesIndex;

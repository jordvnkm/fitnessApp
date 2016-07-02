const React = require("react");
const RoutesIndexItem = require("./routes_index_item");


const CompletedRoutesIndex = React.createClass({

  routesIndexItems: function(){
    return (
      <ul>
        {
          this.props.routes.map((route) => {
            return <li key={route.id}><RoutesIndexItem route={route}/></li>
          })
        }
      </ul>
    );
  },

  render: function(){
    return (
      <div className="routesIndex">
        <h3 id="completedRoutesTitle">Completed Routes</h3>
        {this.routesIndexItems()}
      </div>
    );
  }
});


module.exports = CompletedRoutesIndex;

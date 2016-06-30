const React = require("react");
const RoutesIndexItem = require("./routes_index_item");

const AuthoredRoutesIndex = React.createClass({
  routesIndexItems: function(){
    return (
      <ul>
        {
          this.props.routes.map((route) => {
            return <li key={route.id}><RoutesIndexItem route={route}/></li>
          })
        }
      </ul>
    )
  },

  render: function(){
    return (
      <div>
        <h3>Authored Routes</h3>
        {this.routesIndexItems()}
      </div>
    );
  }
});

module.exports = AuthoredRoutesIndex;

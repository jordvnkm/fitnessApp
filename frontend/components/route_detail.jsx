const React = require("react");
const RouteActions = require("../actions/route_actions");
const RouteStore = require("../stores/routes_store");
const RouteDetailMap = require("./route_detail_map");

const RouteDetail = React.createClass({
  getInitialState: function(){
    return {route: RouteStore.find(this.props.params.routeId)};
  },

  componentDidMount: function(){
    this.routeListener = RouteStore.addListener(this.updateRoute);
    RouteActions.fetchRoute(this.props.params.routeId);
  },

  updateRoute: function(){
    this.setState({route: RouteStore.find(this.props.params.routeId)});
  },

  componentWillUnmount: function(){
    this.routeListener.remove();
  },

  map: function(){
    if (this.state.route){
      return <RouteDetailMap waypoints={this.state.route.waypoints} />;
    }
  },

  render: function(){
    let text;
    if (this.state.route){
      text = this.state.route.name;
    }
    return (
      <div>
        hello from route detail {text}
        {this.map()}
      </div>
    );
  }
});


module.exports = RouteDetail;

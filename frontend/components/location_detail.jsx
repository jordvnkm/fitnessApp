const React = require("react");
const RouteStore = require("../stores/routes_store");
const RouteActions = require("../actions/route_actions");

const DiscoverMap = require("./discover_map");
const RoutesIndex = require("./routes_index");

const LocationActions = require("../actions/location_actions");
const LocationStore = require("../stores/location_store");


const LocationDetail = React.createClass({
  getInitialState: function(){
    return {routes: null, location: LocationStore.find(this.props.params.locationId)};
  },
  componentDidMount: function(){
    this.routeListener = RouteStore.addListener(this.updateRoutes);
    RouteActions.fetchRoutesForLocation(this.props.params.locationId);
    this.locationListener = LocationStore.addListener(this.updateLocations);
    LocationActions.fetchAllLocations();
  },

  componentWillReceiveProps: function(newProps){
    RouteActions.fetchRoutesForLocation(newProps.params.locationId);
    LocationActions.fetchAllLocations();
  },

  componentWillUnmount: function(){
    this.routeListener.remove();
    this.locationListener.remove();
  },

  updateLocations: function(){
    this.setState({location: LocationStore.find(this.props.params.locationId)});
  },

  updateRoutes: function(){
    this.setState({routes: RouteStore.all()});
  },

  routesIndex: function(){
    if (this.state.routes && this.state.routes.length > 0){
      return <RoutesIndex routes={this.state.routes}/>
    }
    else {
      return <span>No routes for this location</span>
    }
  },
  render: function(){
    if (parseInt(this.props.params.locationId) === 0){
      return (
        <div>
          no routes for this location
        </div>
      )
    }
    else{
      return (
        <div>
          <DiscoverMap location={this.state.location} routes={this.state.routes} />
          {this.routesIndex()}
        </div>
      );
    }
  }
});


module.exports = LocationDetail;

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
    this.locationListener = LocationStore.addListener(this.updateLocations);
    if (parseInt(this.props.params.locationId) !== 0){
      console.log("did mount")
      RouteActions.fetchRoutesForLocation(this.props.params.locationId);
      LocationActions.fetchAllLocations();
    }
  },

  componentWillReceiveProps: function(newProps){
    if (parseInt(newProps.params.locationId) !== 0){
      console.log('will receive props')
      RouteActions.fetchRoutesForLocation(newProps.params.locationId);
      LocationActions.fetchAllLocations();
    }
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
    if (this.state.location){
      return (
        <div>
          <h2>{this.state.location.name}</h2>
          <RoutesIndex routes={this.state.routes}/>
        </div>
      )
    }

  },
  render: function(){
    if (parseInt(this.props.params.locationId) === 0){
      return (
        <div className="locationError">
          <h1>No routes for this location</h1>
        </div>
      )
    }
    else{
      return (
        <div className="locationDetail">
          <DiscoverMap location={this.state.location} routes={this.state.routes} />
          <div className="locationRoutes">
            {this.routesIndex()}
          </div>
        </div>
      );
    }
  }
});


module.exports = LocationDetail;

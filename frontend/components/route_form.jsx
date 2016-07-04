const React = require("react");
const LocationStore = require("../stores/location_store");
const RouteActions = require("../actions/route_actions");
const LocationActions = require("../actions/location_actions");
const RouteStore = require("../stores/routes_store");
const RouteCreateMap = require("./route_create_map");
const ErrorStore = require("../stores/error_store");
const UserStore = require("../stores/users_store");
const WaypointActions = require("../actions/waypoint_actions");
const WaypointStore = require("../stores/waypoint_store");

const hashHistory = require("react-router").hashHistory;
const Button = require("react-bootstrap").Button;

const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;

const RouteForm = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser(), name: "", notes: "",
            locations: LocationStore.all(), currentLocation: null,
            errors: ErrorStore.all(), waypoints: []};
  },

  componentDidMount: function(){
    if (!this.state.currentUser){
      alert("must be logged in to create route");
      hashHistory.push("/");
    }
    this.locationListener = LocationStore.addListener(this.updateLocations);
    this.errorListener = ErrorStore.addListener(this.errorChange);
    this.routeListener = RouteStore.addListener(this.routeChange);
    this.waypointListener = WaypointStore.addListener(this.waypointChange);
    LocationActions.fetchAllLocations();
  },

  componentWillUnmount: function(){
    this.locationListener.remove();
    this.errorListener.remove();
    this.routeListener.remove();
    this.waypointListener.remove();
  },

  routeChange: function(){
    this.createWaypoints(RouteStore.lastAdded().id);
  },

  waypointChange: function(){
    const length = WaypointStore.all().length;
    if (length === this.waypointsNeeded){
      hashHistory.push(`/users/${this.state.currentUser.id}`);
    }
  },

  createWaypoints: function(routeId){
    this.waypointsNeeded = this.state.waypoints.length;

    for (let i = 0 ; i < this.state.waypoints.length; i ++){
      WaypointActions.createWaypoint({
        lat: this.state.waypoints[i].lat(),
        lng: this.state.waypoints[i].lng(),
        route_id: routeId,
        order: i
      })
    }
  },

  errorChange: function(){
    this.setState({errors: ErrorStore.all()});
  },

  updateLocations: function(){
    this.setState({locations: LocationStore.all()});
  },

  nameChange: function(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({name: event.target.value});
  },

  noteChange: function(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({notes: event.target.value});
  },

  locationChange: function(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({currentLocation: LocationStore.find(event.target.value)});
  },

  selectItems: function(){
    if (this.state.locations){
      return (
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Location</ControlLabel>
          <FormControl onChange={this.locationChange} componentClass="select" placeholder="select">
            <option key="start" value="0">select city</option>
            {this.state.locations.map((location) => {
              return <option key={location.id} value={location.id}>{location.name}</option> ;
            })}
          </FormControl>
        </FormGroup>
      );
    }
  },

  onSubmit: function(event){
    event.preventDefault();
    event.stopPropagation();
    if (this.state.name.length === 0){
      RouteActions.handleError({
        responseJSON: {errors: ["Please specify route name"]}
      });
    }
    else if (this.state.currentLocation === null){
      RouteActions.handleError({
        responseJSON: {errors: ["please select location"]}
      });
    }
    else if (this.state.waypoints.length < 2){
      RouteActions.handleError({
        responseJSON: {errors: ["must choose at least 2 waypoints"]}
      });
    }
    else{
      RouteActions.createRoute({
        name: this.state.name,
        notes: this.state.notes,
        location_id: this.state.currentLocation.id,
        author_id: this.state.currentUser.id
      });
    }
  },

  addWaypoint: function(latLng){
    let myWaypoints = this.state.waypoints.concat([latLng]);
    this.setState({waypoints: myWaypoints});
  },

  waypointsAdded: function(){
    if (this.state.waypoints.length > 0){
      let index = 0;
      return (
        <div>
          <ul>
            {
              this.state.waypoints.map((latLng) => {
                index += 1;
                return <li key={index}> Lat : {latLng.lat()}, Lng : {latLng.lng()}</li>
              })
            }
          </ul>
        </div>
      );
    }
  },

  routeCreateMap: function(){
    if (this.state.currentLocation){
      return <RouteCreateMap location={this.state.currentLocation} clickHandler={this.addWaypoint}/> ;
    }
  },

  errors: function(){
    if (!(this.state.errors)){
      return;
    }
    var self = this;
    return (<ul>
    {
      Object.keys(self.state.errors).map(function(key, i){
        return (<li key={i}>{self.state.errors[key]}</li>);
      })
    }
    </ul>);
  },



  render: function(){
    return(
      <div>
        {this.errors()}
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Route Name</ControlLabel>
            <FormControl type="text" placeholder="Enter Route Name"
              value={this.state.name} onChange={this.nameChange}/>
          </FormGroup>

          <FormGroup controlId="formControlsText">
            <ControlLabel>Description</ControlLabel>
            <FormControl type="text" placeholder="Enter Route Description"
              value={this.state.notes} onChange={this.noteChange}/>
          </FormGroup>

          {this.selectItems()}

          <Button type="submit">Create Route</Button>
        </form>
        {this.waypointsAdded()}
        {this.routeCreateMap()}
      </div>
    );
  }
});


module.exports = RouteForm;

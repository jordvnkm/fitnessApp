const React = require("react");
const LocationStore = require("../stores/location_store");
const RouteActions = require("../actions/route_actions");
const LocationActions = require("../actions/location_actions");
const RouteStore = require("../stores/routes_store");
const RouteCreateMap = require("./route_create_map");
const ErrorStore = require("../stores/error_store");

const hashHistory = require("react-router").hashHistory;
const Button = require("react-bootstrap").Button;

const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;

const RouteForm = React.createClass({
  getInitialState: function(){
    return {name: "", notes: "", locations: LocationStore.all(), currentLocation: null,
            errors: ErrorStore.all(), waypoints: []};
  },

  componentDidMount: function(){
    this.locationListener = LocationStore.addListener(this.updateLocations);
    this.errorListener = ErrorStore.addListener(this.errorChange);
    LocationActions.fetchAllLocations();
  },

  componentWillUnmount: function(){
    this.locationListener.remove();
    this.errorListener.remove();
  },

  errorChange: function(){
    this.setState({errors: ErrorStore.all()});
  },

  updateLocations: function(){
    this.setState({locations: LocationStore.all()});
  },

  nameChange: function(event){
    this.setState({name: event.target.value});
  },

  noteChange: function(event){
    this.setState({notes: event.target.value});
  },

  locationChange: function(event){
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

  onSubmit: function(){
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

  errors: function(myerrors){
    if (!myerrors){
      return;
    }
    var self = this;
    return (<ul>
    {
      Object.keys(myerrors).map(function(key, i){
        return (<li key={i}>{myerrors[key]}</li>);
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

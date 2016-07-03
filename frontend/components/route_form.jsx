const React = require("react");
const LocationStore = require("../stores/location_store");
const RouteActions = require("../actions/route_actions");
const LocationActions = require("../actions/location_actions");
const RouteStore = require("../stores/routes_store");
const RouteCreateMap = require("./route_create_map");

const hashHistory = require("react-router").hashHistory;
const Button = require("react-bootstrap").Button;

const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;

const RouteForm = React.createClass({
  getInitialState: function(){
    return {name: "", notes: "", locations: LocationStore.all(), currentLocation: null,
            locationErrors: LocationStore.errors(), routeErrors: RouteStore.errors()};
  },

  componentDidMount: function(){
    this.locationListener = LocationStore.addListener(this.updateLocations);
    LocationActions.fetchAllLocations();
  },

  componenetWillUnmount: function(){
    this.locationListener.remove();
  },

  updateLocations: function(){
    this.setState({locations: LocationStore.all(), locationErrors: LocationStore.errors()});
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
    console.log("submit clicked");
  },

  addWaypoint: function(){
    console.log("add waypoint clicked");
  },
  render: function(){
    return(
      <div>
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

        <RouteCreateMap location={this.state.currentLocation} clickHandler={this.addWaypoint}/>
      </div>
    );
  }
});


module.exports = RouteForm;

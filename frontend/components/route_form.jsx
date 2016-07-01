const React = require("react");
const RouteActions = require("../actions/route_actions");
const hashHistory = require("react-router").hashHistory;
const Button = require("react-bootstrap").Button;

const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;

const RouteForm = React.createClass({
  getInitialState: function(){
    return {name: "", notes: "", location_id: null};
  },

  nameChange: function(event){
    this.setState({name: event.target.value});
  },

  noteChange: function(event){
    this.setState({notes: event.target.value});
  },

  locationChange: function(event){
    this.setState({location})
  },

  selectItems: function(){

  },

  onSubmit: function(){

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
      </div>
    );
  }
});


module.exports = RouteForm;

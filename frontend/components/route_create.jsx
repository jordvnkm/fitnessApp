const React = require("react");
const RouteForm = require("./route_form");
const RouteCreateMap = require("./route_create_map");

const RouteCreate = React.createClass({
  componentDidMount: function(){

  },

  render: function(){
    return(
      <div>
        <RouteForm />
        <RouteCreateMap />
      </div>
    );
  }
});


module.exports = RouteCreate;

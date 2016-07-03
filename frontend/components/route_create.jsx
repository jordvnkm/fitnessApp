const React = require("react");
const RouteForm = require("./route_form");

const RouteCreate = React.createClass({
  componentDidMount: function(){

  },

  render: function(){
    return(
      <div>
        <RouteForm />
      </div>
    );
  }
});


module.exports = RouteCreate;

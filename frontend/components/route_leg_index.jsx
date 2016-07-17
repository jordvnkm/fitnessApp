const React = require("react");



const RouteLegIndex = React.createClass({
  steps: function(){
    if (this.props.info){
      let index = 0;
      let parser = new DOMParser();
      return (
        <ul>
          {this.props.info.steps.map((step) => {
            let doc = parser.parseFromString(step.instructions, "text/html");
            index += 1;
            return <li key={index}>{index}. {doc.children[0].textContent}</li>
          })}
        </ul>
      )
    }
  },

  routeInfo: function(){
    if (this.props.info){
      return (
        <div>
          <h5>Distance: {this.props.info.distance.text}</h5>
          <h5>Start address: {this.props.info.start_address}</h5>
          <h5>End address: {this.props.info.end_address}</h5>
        </div>
      )
    }
  },

  render: function(){
    return (
      <div>
        {this.routeInfo()}
        {this.steps()}
      </div>
    )
  }
});



module.exports = RouteLegIndex;

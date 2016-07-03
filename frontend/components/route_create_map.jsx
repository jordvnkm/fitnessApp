const React = require("react");
const ReactDOM = require("react-dom");

const RouteCreateMap = React.createClass({
  getInitialState: function(){
    return {};
  },

  componentDidMount: function(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.routeCreateMap);
    // const location = this.props.location_center;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.addWaypoints(event.latLng);
    });
  },

  addWaypoints: function(){

  },

  render: function(){
    return (
      <div className="map" ref="routeCreateMap">
      </div>
    );
  }
});


module.exports = RouteCreateMap;

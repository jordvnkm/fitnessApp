const React = require("react");
const ReactDOM = require("react-dom");

const RouteCreateMap = React.createClass({
  getInitialState: function(){
    return {};
  },
  componentWillReceiveProps: function(newProps){
    if (newProps.location){
      let centerLat = parseFloat(newProps.location.center_lat);
      let centerLng = parseFloat(newProps.location.center_lng);
      this.map.setCenter({lat: centerLat, lng: centerLng});
    }
  },

  componentDidMount: function(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.routeCreateMap);

    let centerLat;
    let centerLng;

    if (this.props.location){
      centerLat = parseFloat(this.props.location.center_lat);
      centerLng = parseFloat(this.props.location.center_lng);
    }
    else {
      centerLat = 34.0395;
      centerLng = -118.288;
    }
    const mapOptions = {
      center: {lat: centerLat, lng: centerLng},
      zoom: 12
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.props.clickHandler(event.latLng);
    });
  },

  render: function(){
    return (
      <div className="map" ref="routeCreateMap">
      </div>
    );
  }
});


module.exports = RouteCreateMap;

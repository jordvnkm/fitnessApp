const React = require("react");
const ReactDOM = require("react-dom");
const ErrorStore = require("../stores/error_store");

const RouteCreateMap = React.createClass({
  getInitialState: function(){
    return {errors: ErrorStore.all()};
  },

  componentWillReceiveProps: function(newProps){
    if (newProps.location){
      let centerLat = parseFloat(newProps.location.center_lat);
      let centerLng = parseFloat(newProps.location.center_lng);
      this.map.setCenter({lat: centerLat, lng: centerLng});
      this.map.setZoom(12);
    }

    if (newProps.location.id !== this.location.id){
      this.location = newProps.location;
      this.startMarker.setMap(null);

      this.waypoints = [];
    }

  },


  createLatLngs: function(array){
    let points = [];
    array.forEach((point) => {
      const position = {lat: parseFloat(point.lat()), lng: parseFloat(point.lng())};

      points.push({
        location: position,
        stopover: false
      });
    })
    return points;
  },

  addWaypoint: function(latLng){
    if (this.waypoints.length == 0){
      this.startMarker = new google.maps.Marker({
        position: {lat: latLng.lat(), lng: latLng.lng()},
      });

      this.startMarker.setMap(this.map);

      this.waypoints.push(latLng);
    }
    else if (this.waypoints.length <= 9){
      this.startMarker.setMap(null);
      if (this.directionsDisplay){
        this.directionsDisplay.setMap(null);
      }
      this.directionsDisplay = new google.maps.DirectionsRenderer();
      let directionsService = new google.maps.DirectionsService();
      this.directionsDisplay.setMap(this.map);

      this.waypoints.push(latLng);

      const start = this.waypoints[0];
      const end = this.waypoints[(this.waypoints.length - 1)];

      const waypointCopy = this.waypoints.slice();
      const middlePoints = waypointCopy.splice(1, (this.waypoints.length - 2));

      const startLatLng = {lat: start.lat(), lng: start.lng()};
      const endLatLng = {lat: end.lat(), lng: end.lng()};

      const middleLatLngArray = this.createLatLngs(middlePoints);

      const request = {
        origin: startLatLng,
        destination: endLatLng,
        waypoints: middleLatLngArray,
        travelMode: google.maps.TravelMode.WALKING
      };

      let self = this;

      directionsService.route(request, function(result, status){
        if (status == google.maps.DirectionsStatus.OK){
          console.log(result);
          self.directionsDisplay.setDirections(result);
        }
      });

    }
  },


  componentDidMount: function(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.routeCreateMap);
    let centerLat;
    let centerLng;

    if (this.props.location){
      this.location = this.props.location;
      centerLat = parseFloat(this.props.location.center_lat);
      centerLng = parseFloat(this.props.location.center_lng);
    }
    else {
      centerLat = 34.0395;
      centerLng = -118.288;
    }
    const mapOptions = {
      center: {lat: centerLat, lng: centerLng},
      zoom: 12,
      scrollwheel: false
    };

    this.waypoints = [];

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.props.clickHandler(event.latLng);
      this.addWaypoint(event.latLng);
    });
  },

  render: function(){
    return (
      <div id="routeCreateMap" className="map" ref="routeCreateMap"></div>
    );
  }
});


module.exports = RouteCreateMap;

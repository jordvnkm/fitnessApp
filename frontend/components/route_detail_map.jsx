const React = require("react");
const ReactDOM = require("react-dom");


const RouteDetailMap = React.createClass({

  createLatLngs: function(array){
    let points = [];
    array.forEach((point) => {
      const position = {lat: parseFloat(point.lat), lng: parseFloat(point.lng)};

      points.push({
        location: position,
        stopover: false
      });
    })
    return points;
  },

  sortWaypoints: function(array){
    let sorted = [];
    for (let i = 0 ; i < array.length; i++ ){
      sorted.push(array[i]);
    }
    return sorted;
  },

  componentDidMount: function(){
    let waypoints = this.sortWaypoints(this.props.waypoints);
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.routeMap);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435} , // this is LA
      zoom: 13,
      scrollwheel: false
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    directionsDisplay.setMap(this.map);

    const start = waypoints[0];
    const end = waypoints[(waypoints.length - 1)];


    const middlePoints = waypoints.splice(1, (waypoints.length - 2));
    const startLatLng = {lat: parseFloat(start.lat), lng: parseFloat(start.lng)};
    const endLatLng = {lat: parseFloat(end.lat), lng: parseFloat(end.lng)};

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
        self.props.updateLegs(result.routes[0].legs[0]);
        directionsDisplay.setDirections(result);
      }
    });

  },

  render: function(){
    return(
      <div className="routeDetailMap" ref='routeMap'>

      </div>
    );
  }
});


module.exports = RouteDetailMap;

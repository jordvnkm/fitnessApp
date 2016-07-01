const React = require("react");
const ReactDOM = require("react-dom");


const Map = React.createClass({

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

  componentDidMount: function(){
    let waypoints = this.props.waypoints;
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435} , // this is SF
      zoom: 13
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

    directionsService.route(request, function(result, status){
      if (status == google.maps.DirectionsStatus.OK){
        directionsDisplay.setDirections(result);
      }
    });

  },

  render: function(){
    return(
      <div className='map' ref='map'>
        hello from map
      </div>
    );
  }
});


module.exports = Map;

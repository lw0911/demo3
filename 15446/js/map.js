function initialize() {

  // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#000000" },
      { saturation: -100 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  var myLatlng = new google.maps.LatLng(40.6996688, -74.2200069);

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 11,
    scrollwheel: false,
    center: myLatlng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var iconBase = 'http://uysys.com/ThemeRole/addline/img/marker.png';

        var marker = new google.maps.Marker({
        position: myLatlng,
        animation: google.maps.Animation.DROP,
        map: map,
        icon: iconBase 

    });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
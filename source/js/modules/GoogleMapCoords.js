let GoogleMapCoords = () => {
  google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(58.802362,63.848876),
            zoom: 5,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
  {
    "featureType": "landscape",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 60 }
    ]
  },{
    "featureType": "road.local",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 40 },
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "saturation": -100 },
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "administrative.province",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "lightness": 30 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#ef8c25" },
      { "lightness": 40 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#b6c54c" },
      { "lightness": 40 },
      { "saturation": -40 }
    ]
  },{
  }
],
        }
        var mapElement = document.getElementById('cdek_map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Екатеренбург', 'undefined', 'undefined', 'undefined', 'undefined', 56.8389261, 60.6057025, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png'],['Тюмень', 'undefined', 'undefined', 'undefined', 'undefined', 57.1612975, 65.5250172, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png'],['Ижевск', 'undefined', 'undefined', 'undefined', 'undefined', 56.8618601, 53.2324285, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png'],['Сургут', 'undefined', 'undefined', 'undefined', 'undefined', 61.2559503, 73.3845471, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png'],['Томск', 'undefined', 'undefined', 'undefined', 'undefined', 56.5010397, 84.9924506, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png']
        ];
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';     }

}
}

export default GoogleMapCoords;

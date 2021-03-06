var ws;
var map;
var connected = false;
var markersCli = new Array();
var markersMag = new Array();
var server;
var lat = 40.74;
var long = -73.98;

function HomeControl(controlDiv, map) {

    // Set CSS styles for the DIV containing the control
    // Setting padding to 5 px will offset the control
    // from the edge of the map
    controlDiv.style.padding = '5px';

    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = 'white';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '2px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to set the map to Home';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '18px';
    controlText.style.paddingLeft = '8px';
    controlText.style.paddingTop = '5px';
    controlText.style.paddingBottom = '5px';
    controlText.style.paddingRight = '8px';
    controlText.innerHTML = '<b>Home</b>';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to
    google.maps.event.addDomListener(controlUI, 'click', function() {
        lat = 40.74;
        long = -73.98;
        map.setCenter(new google.maps.LatLng(40.74,-73.98));
    });

}

function TopFunction(controlDiv, map) {
    controlDiv.style.padding = '5px';
    var controlTop = document.createElement('div');
    controlTop.style.backgroundColor = 'white';
    controlTop.style.borderStyle = 'solid';
    controlTop.style.borderWidth = '2px';
    controlTop.style.cursor = 'pointer';
    controlTop.style.textAlign = 'center';
    controlTop.title = 'Click to go Top';
    controlDiv.appendChild(controlTop);
    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '18px';
    controlText.style.paddingLeft = '8px';
    controlText.style.paddingTop = '5px';
    controlText.style.paddingBottom = '5px';
    controlText.style.paddingRight = '8px';
    controlText.innerHTML = '<b>Top</b>';
    controlTop.appendChild(controlText);

    google.maps.event.addDomListener(controlTop, 'click', function() {
        lat = lat + 0.01;
        map.setCenter(new google.maps.LatLng(lat, long));

    });

}

function BottomFunction(controlDiv, map) {
    controlDiv.style.padding = '5px';
    var controlBottom = document.createElement('div');
    controlBottom.style.backgroundColor = 'white';
    controlBottom.style.borderStyle = 'solid';
    controlBottom.style.borderWidth = '2px';
    controlBottom.style.cursor = 'pointer';
    controlBottom.style.textAlign = 'center';
    controlBottom.title = 'Click to go Bottom';
    controlDiv.appendChild(controlBottom);
    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '18px';
    controlText.style.paddingLeft = '8px';
    controlText.style.paddingTop = '5px';
    controlText.style.paddingBottom = '5px';
    controlText.style.paddingRight = '8px';
    controlText.innerHTML = '<b>Bottom</b>';
    controlBottom.appendChild(controlText);

    google.maps.event.addDomListener(controlBottom, 'click', function() {
        lat = lat - 0.01;
        map.setCenter(new google.maps.LatLng(lat, long));

    });
}

function LeftFunction(controlDiv, map) {
    controlDiv.style.padding = '5px';
    var controlLeft = document.createElement('div');
    controlLeft.style.backgroundColor = 'white';
    controlLeft.style.borderStyle = 'solid';
    controlLeft.style.borderWidth = '2px';
    controlLeft.style.cursor = 'pointer';
    controlLeft.style.textAlign = 'center';
    controlLeft.title = 'Click to go Left';
    controlDiv.appendChild(controlLeft);
    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '18px';
    controlText.style.paddingLeft = '8px';
    controlText.style.paddingTop = '5px';
    controlText.style.paddingBottom = '5px';
    controlText.style.paddingRight = '8px';
    controlText.innerHTML = '<b>Left</b>';
    controlLeft.appendChild(controlText);

    google.maps.event.addDomListener(controlLeft, 'click', function() {
        long = long - 0.01;
        map.setCenter(new google.maps.LatLng(lat, long));

    });

}

function RightFunction(controlDiv, map) {
    controlDiv.style.padding = '5px';
    var controlRight = document.createElement('div');
    controlRight.style.backgroundColor = 'white';
    controlRight.style.borderStyle = 'solid';
    controlRight.style.borderWidth = '2px';
    controlRight.style.cursor = 'pointer';
    controlRight.style.textAlign = 'center';
    controlRight.title = 'Click to go Right';
    controlDiv.appendChild(controlRight);
    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '18px';
    controlText.style.paddingLeft = '8px';
    controlText.style.paddingTop = '5px';
    controlText.style.paddingBottom = '5px';
    controlText.style.paddingRight = '8px';
    controlText.innerHTML = '<b>Right</b>';
    controlRight.appendChild(controlText);

    google.maps.event.addDomListener(controlRight, 'click', function() {
        long = long + 0.01;
        map.setCenter(new google.maps.LatLng(lat, long));
    });
}

function showMap(punti) {
    var latlng = new google.maps.LatLng(40.74, -73.98);
    var myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        }
    };
	
	var ma = document.getElementById("mapView");
	
	var width = window.screen.width;
	var height = window.screen.height;

	ma.style.width='auto';
	//ma.style.height=(height-100)+'px';
	ma.style.height='1000px';
	
	ma.style.marginTop='10px';
	ma.style.marginLeft='2%';
	ma.style.marginRight='2%';
	ma.style.marginBottom="80px";
	//ma.style.marginRight=spazio+'px';
	
	map = new google.maps.Map(ma, myOptions);
			 
			 
    var ncli = punti[0];
    var nmag = punti[1];
    for (i = 0; i < ncli; i++) {
        latlng = new google.maps.LatLng(punti[2 + 2 * i + 1], punti[2 + 2 * i]);
         markersCli[i] = new google.maps.Marker({
            position: latlng,
            map: map,
            draggable: false,
            icon: 'http://maps.google.com/mapfiles/kml/pal5/icon14.png',
            title: "Cliente " + i
			
        });
    }
	
	
	
    var start = 2 + ncli * 2;
    for (i = 0; i < nmag; i++) {
        latlng = new google.maps.LatLng(punti[start + 2 * i + 1], punti[start + 2 * i + 0]);
        markersMag[i] = new google.maps.Marker({
            position: latlng,
            map: map,
            draggable: false,
            icon: 'http://maps.google.com/mapfiles/kml/pal3/icon56.png',
            title: "Magazzino " + i
        });
    }


    var homeControlDiv = document.createElement('div');
    var homeControl = new HomeControl(homeControlDiv, map);
    homeControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

    var Top = document.createElement('div');
    var Control = new TopFunction(Top, map);
    Top.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(Top);

    var Bottom = document.createElement('div');
    var Control = new BottomFunction(Bottom, map);
    Bottom.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(Bottom);

    var Left = document.createElement('div');
    var Control = new LeftFunction(Left, map);
    Left.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(Left);

    var Right = document.createElement('div');
    var Control = new RightFunction(Right, map);
    Right.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(Right);



    var legend = document.getElementById('legend');

    var mag = document.createElement('div');
    mag.innerHTML = '<img src="http://maps.google.com/mapfiles/kml/pal3/icon56.png"> Magazzino';
    legend.appendChild(mag);

    var cli = document.createElement('div');
    cli.innerHTML = '<img src="http://maps.google.com/mapfiles/kml/pal5/icon14.png"> Cliente';
    legend.appendChild(cli);

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
    legend.style.visibility = 'visible';


	
    //google.maps.event.addDomListener(window, 'load', initialize);
}

function showLines(punti) {
    var nLinks = punti[0];

    for (i = 0; i < nLinks; i++) {
        var borderPath = new google.maps.Polyline({
            path: [markersMag[punti[1 + i] - 1].getPosition(), markersCli[i].getPosition()],
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            geodesic: true,
            strokeWeight: 2,
            map: map
        });
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Permesso negato."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "position unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "Richiesta in timeout."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Errore sconosciuto."
            break;
    }
}

function getClients() {

    ipser = document.getElementById("ipserver").value;

    if (ipser == "") {
        alert("Inserisci ip server!");
    } else {

        document.getElementById("getSoluzione").disabled = false;
        if ("WebSocket" in window) {
            server = document.getElementById("server");
            ws = new WebSocket('ws://' + ipser + ':8100');
           // ws = new WebSocket('ws://172.16.115.170:8100');
            server.innerHTML = "Connessione...";

            ws.onopen = function() { // Send data
                ws.send("0");
                server.innerHTML = "Connesso";
            };

            ws.onmessage = function(evt) {
                var receivedmsg = evt.data;
                var punti = receivedmsg.split(",");
                showMap(punti);
                server.innerHTML = "Receiving";
            };

            ws.onclose = function() {
                server.innerHTML = "Disconnesso";
                connected = false;
            };

            ws.onerror = function(evt) {
                connected = false;
                server.innerHTML = "Errore";
            };
        }
    }
}

function getSolution() {
    if ("WebSocket" in window) {
        ws.send(1);

        ws.onmessage = function(evt) {
            var receivedmsg = evt.data;
            var punti = receivedmsg.split(",");
            showLines(punti);
        };
    }
}
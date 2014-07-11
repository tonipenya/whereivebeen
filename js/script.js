BEEN_COLOR =  "#03a9f4";
LIVED_COLOR = "#ffab40";
SEA_COLOR =   "#b3e5fc";
NON_VISITED_COLOR = "#e1f5fe"; 
been = ["IE", "FI", "IT", "FR", "GR", "DE", "PT", "JP", "US", "AR", "TW", "SG", "TH", "CA"];
lived = ["GB", "ES", "HK", "CN"];
cities = [
            {title: "Barcelona", lat: 41.3833, lon: 2.1833},
            {title: "Sevilla", lat: 37.3772, lon: -5.9869},
            {title: "Florence", lat: 43.783333, lon: 11.25},
            {title: "Rome", lat: 41.9, lon: 12.5},
            {title: "Buenos Aires", lat: -34.60333, lon: -58.38166},
            {title: "Berlin", lat: 52.516667, lon: 13.383333},
            {title: "Tampere", lat: 61.5, lon: 23.766667},
            {title: "Paris", lat: 48.8567, lon: 2.3510},
            {title: "Madrid", lat: 40.383333, lon: -3.716667},
            {title: "Athens", lat: 37.966667, lon: 23.716667},
            {title: "Cyclades", lat: 37.45, lon: 25.35},
            {title: "Montpelier", lat: 43.6119, lon: 3.8772},
            {title: "Lyon", lat: 45.76, lon: 4.84},
            {title: "London", lat: 51.507222, lon: -0.1275},
            {title: "Southampton", lat: 50.9, lon: -1.4},
            {title: "Edinburgh", lat: 55.953056, lon: -3.188889},
            {title: "Dublin", lat: 53.347778, lon: -6.259722},
            {title: "Belfast", lat: 54.597, lon: -5.93},
            {title: "Loch Ness", lat: 57.3, lon: -4.45},
            {title: "Skye", lat: 57.307, lon: -6.23},
            {title: "New York", lat: 43, lon: -75},
            {title: "Toronto", lat: 43.7, lon: -79.4},
            {title: "Niagara Falls", lat: 43.0799, lon: -79.0747},
            {title: "Hong Kong", lat: 22.267, lon: 114.188},
            {title: "Shenzhen", lat: 22.55, lon: 114.1},
            {title: "Macau", lat: 22.166667, lon: 113.55},
            {title: "Bangkok", lat: 13.75, lon: 100.466667},
            {title: "Chiang Mai", lat: 18.795278, lon: 98.998611},
            {title: "Kho phi phi", lat: 7.733333, lon: 98.766667},
            {title: "Singapore", lat: 1.3, lon: 103.8},
            {title: "Beijin", lat: 39.913889, lon: 116.391667},
            {title: "Taichung", lat: 24.15, lon: 120.666667},
            {title: "Taipei", lat: 25.033333, lon: 121.633333},
            {title: "Shangai", lat: 31.2, lon: 121.5},
            {title: "Guangzhou", lat: 23.133333, lon: 113.266667},
            {title: "Wuyishan", lat: 27.766667, lon: 118.033333},
            {title: "Xiamen", lat: 24.479836, lon: 118.089419},
            {title: "Tokyo", lat: 35.689506, lon: 139.6917},
            {title: "Kyoto", lat: 35.011667, lon: 135.768333},
            {title: "Osaka", lat: 34.693889, lon: 135.502222},
            {title: "Kobe", lat: 34.69, lon: 135.195556},
            {title: "Fuji", lat: 35.358, lon: 138.731},
            {title: "Hiroshima", lat: 34.385278, lon: 132.455278}];
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var map;
AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.pathToImages = "ammap/images/";
    map.zoomControl = { panControlEnabled:   false,
                        buttonFillColor:     BEEN_COLOR,
                        buttonRollOverColor: BEEN_COLOR,
                        top:                 "300"};
    map.imagesSettings = { rollOverColor: "#fff",
                           rollOverScale: 3,
                           selectedScale: 3,
                           selectedColor: "#fff", 
                           color: "#fff"};

    var dataProvider = {
        mapVar: AmCharts.maps.worldHigh,
        zoomLevel: 1.05
    };

    map.areasSettings = {
        unlistedAreasColor: NON_VISITED_COLOR,
        unlistedAreasOutlineColor: SEA_COLOR,
        outlineColor: SEA_COLOR,
        rollOverOutlineColor: "#FFFFFF",
        balloonText: "[[title]]"
    };

    map.creditsPosition = "bottom-right";

    dataProvider.areas = []
    for (i = 0; i < been.length; ++i) {
        dataProvider.areas.push({id: been[i], 
                                color: BEEN_COLOR});
    }

    for (i = 0; i < lived.length; ++i) {
        dataProvider.areas.push({id: lived[i], 
                                color: LIVED_COLOR});
    }

    dataProvider.images = [];
    for (i = 0; i < cities.length; ++i) {
        var city = cities[i];
        dataProvider.images.push({title: city.title,
                                  latitude: city.lat,
                                  longitude: city.lon,
                                  svgPath: targetSVG,
                                  zoomLevel: 5,
                                  scale: 0.5});
    }

    map.dataProvider = dataProvider;

    var legend = {
        width: 600,
        backgroundAlpha: 0,
        borderAlpha: 0,
        bottom: 15,
        left: 15,
        horizontalGap: 10,
        data: [
            {
                title: "Been",
                color: BEEN_COLOR},
            {
                title: "Lived",
                color: LIVED_COLOR}
        ]
    };

    map.addLegend(legend);
    map.write("mapdiv");

});

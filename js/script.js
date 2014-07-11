BEEN_COLOR =  "#03a9f4";
LIVED_COLOR = "#ffab40";
SEA_COLOR =   "#b3e5fc";
NON_VISITED_COLOR = "#e1f5fe"; 
VISITED_CITY_COLOR = "#fff";

var citySVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var map;
AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.pathToImages = "ammap/images/";
    map.zoomControl = { panControlEnabled:   false,
                        buttonFillColor:     BEEN_COLOR,
                        buttonRollOverColor: BEEN_COLOR,
                        top:                 "300"};
    map.imagesSettings = { rollOverColor: VISITED_CITY_COLOR,
                           rollOverScale: 3,
                           selectedScale: 3,
                           selectedColor: VISITED_CITY_COLOR,
                           color: VISITED_CITY_COLOR};

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
                                  svgPath: citySVG,
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

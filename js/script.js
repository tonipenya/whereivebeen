BEEN_COLOR =  "#03a9f4";
LIVED_COLOR = "#ffab40";
SEA_COLOR =   "#b3e5fc";
NON_VISITED_COLOR = "#e1f5fe"; 
been = ["IE", "FI", "IT", "FR", "GR", "DE", "PT", "JP", "US", "AR", "TW", "SG", "TH", "CA"];
lived = ["GB", "ES", "HK", "CN"];

var map;
AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.pathToImages = "ammap/images/";
    map.zoomControl.panControlEnabled = false;
    map.zoomControl.buttonFillColor = "#03a9f4";
    map.zoomControl.top = "300";

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

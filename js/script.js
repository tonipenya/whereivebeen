var map;

AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.pathToImages = "ammap/images/";

    var dataProvider = {
        mapVar: AmCharts.maps.worldHigh
    };

    map.areasSettings = {
        unlistedAreasColor: "#DDDDDD",
        rollOverOutlineColor: "#FFFFFF",
        balloonText: "[[title]]"
    };

    map.creditsPosition = "bottom-right";

    BEEN_COLOR = "#3366cc";
    LIVED_COLOR = "#ffcc22";
    been = ["IE", "FI", "IT", "FR", "GR", "DE", "PT", "JP", "US", "AR", "TW", "SG", "TH", "CA"];
    lived = ["GB", "ES", "HK", "CN"];

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

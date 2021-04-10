console.log('This works!')

(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        const hkjcRacesCols = [
            {
                id: "raceid",
                dataType: tableau.dataTypeEnum.string
            },
            {
                id: "raceidseason",
                dataType: tableau.dataTypeEnum.string
            },
            {
                id: "racedate",
                dataType: tableau.dataTypeEnum.string
            },
            {
                id: "racetrack",
                dataType: tableau.dataTypeEnum.string
            },
            {
                id: "tracktype",
                dataType: tableau.dataTypeEnum.string
            },
            {
                id: "course",
                dataType: tableau.dataTypeEnum.string
            },
            {
                id: "distance",
                dataType: tableau.dataTypeEnum.string
            },
            {
                id: "going",
                dataType: tableau.dataTypeEnum.string
            },
            {
                id: "raceclass",
                dataType: tableau.dataTypeEnum.string
            }        
        ];

        var hkjcTableSchema = {
            id: "hkjcRaces",
            alias: "Hong Kong Jokey Club Races",
            columns: hkjcRacesCols
        };

        schemaCallback([hkjcTableSchema])
    };

    myConnector.getData = function (table, doneCallback) {

    };

    tableau.registerConnector(myConnector);
})();

$(document).ready(function() {
    $("#getData").click(function() {
        console.log('button clicked')
        tableau.connectionName = "Hong Kong Jokey Club Races"; // This will be the data source name in Tableau
        tableau.submit(); // This sends the connector object to Tableau
    });
});
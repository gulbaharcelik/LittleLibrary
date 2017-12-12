 $(".button-collapse").sideNav();

var _test = "";
var app = angular.module('App', []);
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.controller('mobil', function ($scope, $http, $interval, $timeout) {
  
});

app.component("discoverComponent", {
    templateUrl: 'file:///android_asset/www/pages/discover.html',
    bindings: { name: '=' },
    controller: function ($scope, $http, $timeout) {

        $scope.KitapListesi = [];
        $scope.Test = "000";
       

        $http.get("https://us-central1-kitaplik-a0f01.cloudfunctions.net/KitapListele")
        .then(function(response) {
            $scope.Test = response.status;
            if(response.status == 200)
                {
                    $scope.Test = response.data;
                    for(var item in response.data)
                        {
                            $scope.KitapListesi.push(response.data[item]);
                        }
                }
        },function (response) {
            $scope.Test = response.status;
        });
        

    }
});

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    _test = 'Connection type: ' + states[networkState];
}

checkConnection();
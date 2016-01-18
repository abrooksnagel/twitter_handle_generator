var app = angular.module('myApp', []);

//var randomAdjective = [];
//var randomNoun = [];
//var randomCombo = {};

//$scope.putTogether = function() {
//    for (var i = 0; i < 20; i++) {
//    }
//};

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    //$scope.handles = adjectives + "" + nouns;
    //console.log(handles);

    //var randomAdjective = [];
    //var randomNoun = [];
    var randomCombo = {};
    var $scope.handles = [];

    $scope.createHandle = function() {
    //var getAdjectives = function() {
    //    $http.get('/adjectives').then(function(response) {
    //        adjectives = response.data.adjectives;
    //    });
    //    console.log(getAdjectives());

        $http({
            method: 'GET',
            url: '/adjectives'
        }).then(function (response) {
            adjectives = response.data.adjectives;
            shuffleArray(adjectives);
            //randomCombo.adjectives = adjectives;
            //console.log(randomCombo);
            randomAdjectives = adjectives;
            console.log(randomAdjectives);
        });

        $http({
            method: 'GET',
            url: '/nouns'
        }).then(function (response) {
            nouns = response.data.nouns;
            shuffleArray(nouns);
            //randomCombo.nouns = nouns;
            //console.log(randomCombo);
            //$scope.handles = randomCombo;
            randomNouns = nouns;
            for (var i = 0; i < 10; i++) {
                $scope.handles[i] = randomAdjectives[i] + randomNouns[i];
            }
            console.log($scope.handles);
        });
        //console.log(randomCombo);
        //$scope.handles = randomCombo;
        //$scope.handles = adjectives + "" + nouns;
        //console.log(handles);
        //var randomCombo = {adjectives: adjectives, nouns: nouns};
        //console.log(randomCombo);
    };
//var randomizer = function() {
//    return Math.floor(Math.random() * (1 + completeList.length - 0) - 1);
//};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
}]);


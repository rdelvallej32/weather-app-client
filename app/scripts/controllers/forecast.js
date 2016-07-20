'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('ForecastCtrl', ['cityService', 'weatherApi', '$scope', function (cityService, weatherApi, $scope) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

    $scope.weatherResult = weatherApi.get({ APPID: '3967400fc266e26b0cb280c55cf69e22', q: $scope.city, cnt: 2});

    $scope.convertToF = function(degk) {
      return Math.round((1.8 * (degk - 273)) + 32);
    };

    $scope.convertDt = function(dt) {
      return new Date(dt * 1000);
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

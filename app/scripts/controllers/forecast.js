'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('ForecastCtrl', ['cityService', 'weatherApi', '$scope', '$routeParams', function (cityService, weatherApi, $scope, $routeParams) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '1';

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

    $scope.weatherResult = weatherApi.getWeather($scope.city, $scope.days);

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

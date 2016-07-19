'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('ForecastCtrl', ['cityService', '$scope', function (cityService, $scope) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

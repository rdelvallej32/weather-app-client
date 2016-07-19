'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('MainCtrl', ['cityService', '$scope', function (cityService, $scope) {

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

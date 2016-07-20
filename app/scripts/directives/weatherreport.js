'use strict';

/**
 * @ngdoc directive
 * @name weatherAppApp.directive:weatherReport
 * @description
 * # weatherReport
 */
angular.module('weatherAppApp')
  .directive('weatherReport', function () {
    return {
      templateUrl: 'views/weatherreport.html',
      restrict: 'E',
      replace: true,
      scope: {
        weatherDay: '=',
        convertTemp: '&',
        convertDate: '&',
        dateFormat: '@'
      }
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the weatherReport directive');
      // }
    };
  });

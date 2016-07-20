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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the weatherReport directive');
      }
    };
  });

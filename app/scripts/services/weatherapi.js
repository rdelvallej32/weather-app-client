'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.weatherApi
 * @description
 * # weatherApi
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('weatherApi', function ($resource) {
    // Service logic
    // ...
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily');
  });

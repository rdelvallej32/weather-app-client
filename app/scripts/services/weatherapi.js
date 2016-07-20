'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.weatherApi
 * @description
 * # weatherApi
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .service('weatherApi', ['$resource', function ($resource) {
    // Service logic
    // ...
    this.getWeather = function(city, days) {
        let weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily');

        return weatherApi.get({ APPID: 'Put your api key here!', q: city, cnt: days });
  };

}]);

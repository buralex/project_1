'use strict';

angular.module('myApp.view_en', ['ngRoute', 'commonJs'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/en', {
    templateUrl: 'view_en/view_en.html',
    controller: 'ViewEnCtrl'
  });
}])

.controller('ViewEnCtrl', ['ComJs', function(ComJs) {
  ComJs.prop();
}]);
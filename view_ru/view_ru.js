'use strict';

angular.module('myApp.view_ru', ['ngRoute', 'commonJs'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ru', {
    templateUrl: 'view_ru/view_ru.html',
    controller: 'ViewRuCtrl'
  });
}])

.controller('ViewRuCtrl', ['ComJs', function(ComJs) {
ComJs.prop();
}]);
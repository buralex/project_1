'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones/:phoneId#about', {
          //template: '<phone-list></phone-list>'
          //template: '/phones/motorola-xoom-with-wi-fi'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones/motorola-xoom-with-wi-fi');
    }
  ]);

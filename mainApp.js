(function(angular) {
  'use strict';
angular.module('mainApp', ['ngRoute'])


 .controller('mainController_ru', function($scope, $routeParams) {
     
 })


.config(function($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'resume_en.html',
    controller: 'MainController',
     resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/ru', {
    templateUrl: 'resume_ru.html',
    controller: 'MainController'
  });

  // configure html5 to get links working on jsfiddle
  
});
})(window.angular);


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


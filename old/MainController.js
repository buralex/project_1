(function(angular) {
  'use strict';
angular.module('mainApp')

   .controller('MainController', ['$scope', function($scope) {
     
    $scope.templates =
      [{ name: 'EN', url: 'template1.html', navbar: 'inc/en/navbar_en.html'},
       { name: 'RU', url: 'template2.html', navbar: 'inc/ru/navbar_ru.html'}];
    $scope.template = $scope.templates[0];
    
  }]);


})(window.angular); 
 
 
 
 
 
 
 

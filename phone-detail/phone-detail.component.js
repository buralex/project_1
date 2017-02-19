'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', 'ComJs', '$location', '$anchorScroll', '$scope',
      function PhoneDetailController($routeParams, Phone, ComJs, $location, $anchorScroll, $scope) {
        ComJs.prop(); 
        
        
        this.scrollel = function(elem) {
      window.scrollBy(0, document.querySelector(elem).getBoundingClientRect().top);
    }
        // $scope.about = function() {
        //   $location.hash('about');
        //   $anchorScroll();
        // };
        // $scope.projects = function() {
        //   $location.hash('projects');
        //   $anchorScroll();
        // };
        // $scope.contact = function() {
        //   $location.hash('contact');
        //   $anchorScroll();
        // };
        
        
        
      $scope.gotoAnchor = function(x) {
        var newHash = x;
        if ($location.hash() !== newHash) {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash( x);
        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll();
        }
      };
    
        
        //console.log(this);
        var self = this;
        
        
        
        
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });

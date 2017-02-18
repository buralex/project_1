angular.
  module('mainJs').
  factory('MainService', [
    function() {
        
        return { 
          method:  function mtd() {
               
            
            
         console.log("service");
         
         
         
         function myFunction() {
        var elms = document.querySelectorAll("h1");
    
        for (var i = 0; i < elms.length; i++) {
          var el = elms[i];
          el.style.backgroundColor = "green";
        }
      }
    
  
    var elms = document.querySelectorAll("h1");
    
    for (var i = 0; i < elms.length; i++) {
      var el = elms[i];
      el.style.backgroundColor = "blue";
    }
    
    document.querySelector("button").onclick = myFunction;
         
         
            }
         
         
        };   
    }
  ]);
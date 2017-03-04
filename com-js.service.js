'use strict';

angular.
  module('commonJs').
  factory('ComJs', [
    function() {
      
      
      return { 
        prop:  function prp() {
          
          
          console.log('servise');
          
          
             
             //console.log('service');
 /*----------------------------------------------------------------------
              common js for all pages for initialisation functions from main.js
 ------------------------------------------------------------------------*/  
    document.querySelector('.bg-photo-wrap').classList.add('animated');
    document.querySelector('.modal-body1').classList.add('animated');
    document.querySelector('.modal-body2').classList.add('animated');
    document.querySelector('.modal-body1 div').classList.add('animated');
    document.querySelector('.modal-body2 div').classList.add('animated');
    
    starting();
    
    flipCard(".card", "flipped");
    flipText(".quote", ".face", "turned", "again");
    navHide(".navbar", "nav-up");
    remNav("#myNavbar li", "#myNavbar", "in", ".navbar", "nav-up");
    gallery('.frame > a');
    visit('.visit');

  /*------------------------------ smooth scroll-------------------------------*/ 
                                  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
                                      // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
                              // Prevent default anchor click behavior
      event.preventDefault();
      
                                // Store hash
      var hash = this.hash;
      
                                // Using jQuery's animate() method to add smooth page scroll
                              // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
      
                            // Add hash (#) to URL when done scrolling (default click behavior)
      //window.location.hash = hash;
      });
    } // End if
  });
/*------------------------------end smooth scroll-------------------------------*/


  /*----------------------------------------------------------------------
                     end common js for all pages
 ------------------------------------------------------------------------*/      
         
            }
        };  
    }
  ]);
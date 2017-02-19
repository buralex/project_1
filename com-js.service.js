'use strict';

angular.
  module('commonJs').
  factory('ComJs', [
    function() {
      
      console.log('servise');
      return { 
        prop:  function prp() {
             
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
    
    function scrollel(elem) {
      window.scrollBy(0, document.querySelector(elem).getBoundingClientRect().top);
    }
  

 

    
    //document.querySelector('.wave').classList.add('animated');
    //document.querySelector('.bg-photo-wrap').classList.add('animated');
    
  
    
    
    flipCard(".card", "flipped");
    flipText(".quote", ".face", "turned", "again");
    navHide(".navbar", "nav-up");
    remNav("#myNavbar li", "#myNavbar", "in", ".navbar", "nav-up");
    //slideArticle(".stickTop");
    
    
    
    
 
    /*------------------------------ nav hide -------------------------------*/ 
    
 
    
  /*------------------------------ nav hide -------------------------------*/  
  
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
      window.location.hash = hash;
      });
    } // End if
  });
/*------------------------------end smooth scroll-------------------------------*/ 
  
  
    // $(window).scroll(function() {
    //   $(".slideanim").each(function(){
    //     var pos = $(this).offset().top;
  
    //     var winTop = $(window).scrollTop();
    //       if (pos < winTop + 600) {
    //         $(this).addClass("slide");
    //       }
    //   });
    // });  

  /*----------------------------------------------------------------------
                     end common js for all pages
 ------------------------------------------------------------------------*/      
         
            }
        };  
    }
  ]);
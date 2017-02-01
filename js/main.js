 "use strict";
 
  /* -----------------------------------------------------------------------------

                               DEBOUNCE  (sets timeout)
  
----------------------------------------------------------------------------- */
 
function debounce(fn, delay) {
  var t
  return function () {
    clearTimeout(t)
    t = setTimeout(fn, delay)
  }
}
 /* -----------------------------------------------------------------------------

                               FLIPING PHOTO
  
----------------------------------------------------------------------------- */

 function flipCard(selector, classFlipped) {
  var cards = document.querySelectorAll(selector);
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
    hoverListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = card.classList;
      c.contains(classFlipped) === true ? c.remove(classFlipped) : c.add(classFlipped);
    });
  }
  /*return back*/
  function hoverListener(card) {
    card.addEventListener( "mouseleave", function() {
      var c = card.classList;
      c.remove(classFlipped) ;
    });
  }
}
 /* -----------------------------------------------------------------------------

                               FLIPING TEXT
  
----------------------------------------------------------------------------- */
 function flipText(selector, selectorImage, classFlipped, flippedAgain ) {
  var cards = document.querySelectorAll(selector);
  var images = document.querySelectorAll(selectorImage);
    for ( var i  = 0, len = cards.length; i < len; i++ ) {
      var card = cards[i];
    }
    for ( var i  = 0, len = images.length; i < len; i++ ) {
      var image = images[i];
      clickListener( card, image );
    }

  function clickListener(card, image) {
    var img = image.classList;
    var c = card.classList;
    
    function deleteAddClasses(elem) {
      if (elem.contains(classFlipped && flippedAgain)){    // binding clicks
      elem.remove(classFlipped);
      elem.remove(flippedAgain);
      
      } if (elem.contains(classFlipped) ) {
        elem.add(flippedAgain);
      } else {
        elem.add(classFlipped);
      }
      
      function delTwoClasses(elem) {
        if (elem.contains(classFlipped && flippedAgain)){
         elem.remove(classFlipped);
         elem.remove(flippedAgain);
        }
      }
      
      debounce(function() { delTwoClasses(elem) }, 1000)();
      
    }
    
    
    image.addEventListener( "click", function() {
      deleteAddClasses(img);
      deleteAddClasses(c);
    });
    
    card.addEventListener( "click", function() {
      deleteAddClasses(img);
      deleteAddClasses(c);
    });
  }
}
 /* -----------------------------------------------------------------------------

                               NAME APPEARANCE
  
----------------------------------------------------------------------------- */

function myName() {
  document.querySelector('.wave').classList.add('animated');
}
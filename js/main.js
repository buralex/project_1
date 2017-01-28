 "use strict";
 
 /* -----------------------------------------------------------------------------

                               FLIPING PHOTO
  
----------------------------------------------------------------------------- */

 function flipCard(selector) {
  var cards = document.querySelectorAll(selector);
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
    hoverListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = card.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
  /*return back*/
  function hoverListener(card) {
    card.addEventListener( "mouseleave", function() {
      var c = card.classList;
      c.remove("flipped") ;
    });
  }
}
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
  /*------------------- return back  --------------------------------------------*/
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

 /* -----------------------------------------------------------------------------

                               NAV HIDE (*classes without dot)
  
----------------------------------------------------------------------------- */
function navHide(navSel, downCl, upCl, area) {
  var a = document.querySelector(area);
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbar = document.querySelector(navSel);
  var isOver = false;
  var navbarHeight = document.querySelector(navSel).offsetHeight;
  var navCl = document.querySelector(navSel).classList;
  
  function hasScrolled() {
    var st = window.pageYOffset;
    var windHeight = Math.max( document.documentElement.clientHeight, window.innerHeight );
    var documHeight = Math.max(document.body.offsetHeight, document.body.scrollHeight );
    
    navbar.addEventListener("mouseover", function(){ isOver = true });
    navbar.addEventListener("mouseleave", function(){ isOver = false });
      
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight && isOver == false){
      
      // Scroll Up
      navCl.remove(downCl);
      navCl.add(upCl);
    } else {
      // Scroll Down
      if(st + windHeight < documHeight) {
        navCl.remove(upCl);
        navCl.add(downCl);
      }
    }
    
     // up after some time
    // if (navCl.contains(downCl) && st != 0 && st > navbarHeight) {
    //   setTimeout(function(){ navCl.remove(downCl); navCl.add(upCl); }, 4000);  // up after some time
    // }
    
    lastScrollTop = st;
  }
  window.addEventListener("scroll", debounce(function() { hasScrolled() }, 250));
  
  /* ---------------------- appear when hover ---------------------- */

  a.addEventListener("mouseover", mouseOver);
  function mouseOver() {
    navCl.remove(upCl);
    navCl.add(downCl);
  }
}

  /* ---------------------- remove nav when click on li ---------------------- */
  
function remNav(li, nav, modalBorder, removeClass, igniteClass) {
  var li = document.querySelectorAll(li);  // array of li elements
  for (var i = 0; i < li.length; i++) {
      li[i].onclick = function(){
        document.querySelector(nav).classList.toggle(removeClass);
          
          
          /* ---------------------- ignite border when click on li ---------------------- */
          document.querySelector(modalBorder).classList.add(igniteClass);
          debounce(function() { document.querySelector(modalBorder).classList.remove(igniteClass) }, 1000)();
      }
  }
}
      
  
 
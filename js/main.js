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
  
    for ( var i=0, j=0; i < cards.length, j < images.length; i++, j++ ) {
      var card = cards[i];
      var image = images[j];
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
  var lastScrollTop = 0;
  var delta = 5;
  var navbar = document.querySelector(navSel);
  var isOver = false;
  var navbarHeight = document.querySelector(navSel).offsetHeight;
  var navCl = document.querySelector(navSel).classList;
  
  function hasScrolled() {
    var st = Math.max(document.body.scrollTop , window.pageYOffset,  document.documentElement.scrollTop);
    var windHeight = Math.max( document.documentElement.clientHeight, window.innerHeight );
    var documHeight = Math.max(document.body.offsetHeight, document.body.scrollHeight );
    
    navbar.addEventListener("mouseover", function(){ isOver = true });
    navbar.addEventListener("mouseleave", function(){ isOver = false });
      
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight && isOver == false){
      
      // Scroll Down
      navCl.remove(downCl);
      navCl.add(upCl);
    } else {
      
      // Scroll Up
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
      
  

  /* -----------------------------------------------------------------------------

                               ANIMATE PARTS 
  
----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
                    universal function for animate 
----------------------------------------------------------------------------- */
function animateEl(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction);
    if ( isNaN(progress) ) progress = 0.1;
          

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
/* -----------------------------------------------------------------------------
                  end universal function for animate 
----------------------------------------------------------------------------- */

 inner.onclick = function() {
      animateEl({
        duration: 500,
        timing: function(timeFraction) {
          return  Math.pow(timeFraction, 0.3);
        },
        draw: function(progress) {
         var scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
         );
        var distance = scrollHeight - window.innerHeight;
        window.scrollTo(0, progress * distance);
        //document.body.scrollTop = progress * distance ;
        //document.documentElement.scrollTop = progress * distance ;
        //console.log( document.body.scrollTop, progress);
        }
      });
    };
 /*--------------------------------------------------------*/
      gtt.onclick = function() {
    	var distance = Math.max(document.body.scrollTop , window.pageYOffset,  document.documentElement.scrollTop);
      animateEl({
        duration: 500,
        timing: function(timeFraction) {
          return  Math.pow(timeFraction, 0.3);
        },
        draw: function(progress) {
          if (!isNaN(progress)  ) {
          window.scrollTo(0,(1 - progress) * distance);
          //console.log( document.body.scrollTop, 1 - progress);
          }
        }
      });
    };
    
    //window.addEventListener("scroll", function() {  console.log( 'st= %i,  coord= %i ', document.body.scrollTop, inner.getBoundingClientRect().top) });
    
/*----------------------------------------------------
                        going-up elements
-----------------------------------------------------*/
function slideArticle(articleSelector) {
  var lastScrollTop = 0;
  var delta = 5;
  var articles = document.querySelectorAll(articleSelector);
  
  window.addEventListener("scroll", function() { 



for (var i = 0; i < articles.length; i++) {
                var article = articles[i];
                
              }


var	d = window.innerHeight ;
                    var	d2 = window.innerHeight - 100;
                    var coordTop = article.getBoundingClientRect().top;
                    
                    	if (coordTop < d/2 ) {
                    	  
                    

      animateEl({
        duration: 2000,
        timing: function(timeFraction) {
          return  Math.pow(timeFraction, 0.3);
        },
        draw: function(progress) {
                                              // self-executing function articleUp
            (function articleUp(article) {
             
              for (var i = 0; i < articles.length; i++) {
                var article = articles[i];
                hasScrolled( article );
              }
   
            function hasScrolled(article) {
              
              var st = Math.max(document.body.scrollTop , window.pageYOffset,  document.documentElement.scrollTop);
              var windHeight = Math.max( document.documentElement.clientHeight, window.innerHeight );
              var documHeight = Math.max(document.body.offsetHeight, document.body.scrollHeight );
          
              if(Math.abs(lastScrollTop - st) <= delta) return;
           
              if (st > lastScrollTop ){
                // Scroll Down
                
                   /*-------------------------- sliding parts -------------------------------------*/
                console.log(progress);
                //console.log("a  = " + article.getBoundingClientRect().top);
                		// var	d = window.innerHeight ;
                  //   var	d2 = window.innerHeight - 100;
                  //   var coordTop = article.getBoundingClientRect().top;
                    
                  //   	if (coordTop < d/2 ) {
                    	  
                    	    var y = (1 - progress) * (coordTop - 50);
                            window.scrollTo(0, y);
                            
                            //console.log( document.body.scrollTop, 1 - progress);
                         
                      //window.scrollBy(0, article.getBoundingClientRect().top);
                      	//window.scrollTo(0, gtt.getBoundingClientRect().top);
                      
                    
                    
                 /*-------------------------- end sliding parts -------------------------------------*/
              } else {
                // Scroll Up
                }
                
                lastScrollTop = st;
              }
          
              
            })();
            
          
        }
      });
  }
} );

}





  
  
  
 

    
   
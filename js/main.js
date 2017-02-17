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
      
      debounce(function() { delTwoClasses(elem); }, 1000)();
      
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


 /* -----------------------------------------------------------------------------

                               NAV HIDE (*classes without dot)
  
----------------------------------------------------------------------------- */
function navHide(navSel, upCl) {
  var lastScrollTop = 0;
  var delta = 5;
  var navbar = document.querySelector(navSel);
  var navbarHeight = document.querySelector(navSel).offsetHeight;
  var navCl = document.querySelector(navSel).classList;
  var scrolling = false;
  
  function hasScrolled() {
    var st = Math.max(document.body.scrollTop , window.pageYOffset,  document.documentElement.scrollTop);
    var windHeight = Math.max( document.documentElement.clientHeight, window.innerHeight );
    var documHeight = Math.max(document.body.offsetHeight, document.body.scrollHeight );
      
    if(Math.abs(lastScrollTop - st) <= delta) return;
   
    if (st > lastScrollTop && st > navbarHeight + 100 ){
      
      // Scroll Down
      navCl.add(upCl);
      //console.log("scroll down ",st, windHeight, documHeight);
      //console.log("scroll down");
      
     /*--------------- add animations for sections (self-exec) -----------------*/
     (function addAnimCl(elem, classAnim) {
      
        var elms = document.querySelectorAll(".slideanim");  // array of li elements
        for (var i = 0; i < elms.length; i++) {
          var el = elms[i];
          doSmth(el);
        }
        function  doSmth(el) {
          //console.log( "get coords = %i , sum =  %i", getCoords(el).top, st + 600);
          //console.log("el.getBoundingClientRect().top = %i", el.getBoundingClientRect().top);
          if (el.getBoundingClientRect().top < 600) {
            //el.classList.add("slide");
            
            if (window.getComputedStyle(el).visibility == "hidden"){
              el.classList.add("slide");
              
             
            }
          }
        }
        })();
     /*--------------- end add animations -----------------*/

    } else {
      
      // Scroll Up
      if(st < lastScrollTop) {
        navCl.remove(upCl);
        //console.log(st, windHeight, documHeight);
      }
    }
    lastScrollTop = st;
  }
  
  /**/
    window.addEventListener('scroll', function(e) {
    
      if (!scrolling) {
        scrolling = true;
        
        (!window.requestAnimationFrame)
				? debounce(function() { hasScrolled(); scrolling = false; }, 250)()
				: window.requestAnimationFrame(function() {
          hasScrolled();
          //console.log('work');
          scrolling = false;
        });
        
        
      }
      
      
    });

}

  /* ---------------------- remove nav when click on li ---------------------- */
  
function remNav(li, nav, removeClass, navbar, navbarHide) {
  var li = document.querySelectorAll(li);  // array of li elements
  for (var i = 0; i < li.length; i++) {
    var link = li[i];
    handleClick(link, i);
  }  
      
      
      function handleClick(link, index) {
      link.addEventListener('click', function(e) {
        //e.preventDefault();
        //goToTab(index);
        console.log(link.children[0].getAttribute("href"));
        
        document.querySelector(nav).classList.remove(removeClass);
        document.querySelector(navbar).classList.add(navbarHide);
        
        var anchor = link.children[0].getAttribute("href");
        
        /*--------------- add animations for sections (self-exec) -----------------*/
        (function addAnimCl(classAnim) {
          
            var anchorAll = anchor + " *";
            
            var elms = document.querySelectorAll(anchorAll);  // array of li elements
            //console.log(anchorAll);
            
            for (var i = 0; i < elms.length; i++) {
              var div = elms[i];
               //console.log(" element = " + div);
              show(div, i);
            }  
            
            function show(div, index) {
               //var dCl = div.classList;
               if (div.classList.contains("slideanim") ) {
                 
                 div.classList.remove("slide");
                 
                 debounce(function() { div.classList.add("slide"); }, 10)();
                 
                 //TweenLite.from(div, 0.7, {y: '+=70%', autoAlpha: 0});
                 
                }
            }
            
            })();
         /*--------------- end add animations -----------------*/
        
      });
    };
  
}

  /* -----------------------------------------------------------------------------

                               ANIMATE PARTS 
  
----------------------------------------------------------------------------- */

/*----------------------------------------------------
                        scroll animations
-----------------------------------------------------*/  

      
/*----------------------------------------------------
                        gates animation
-----------------------------------------------------*/
function starting() {
 
  
  document.querySelector('.wave').classList.add('animated');
  document.querySelector('.fly1').classList.add('animated');
  
  
  
  
    
    function calcHeight() {
      //window.outerHeight
      var vheight = Math.max( document.documentElement.clientHeight, window.innerHeight );
      document.querySelector('.cont-persp').style.height = vheight + "px";
      document.querySelector('.parent').style.height = vheight*0.5 + "px";
      document.querySelector('.stage').style.height = (vheight - vheight*0.5 - 50) + "px";
  
      //console.log("d", q.s('.parent').style.paddingTop = vheight*0.2 + "px");
    }
    calcHeight();
    window.addEventListener("resize", calcHeight);
    //window.addEventListener("scroll", calcWidth);

  
  
  

  
}


    // var mb1 = document.querySelector(".modal-body1");
    // var mb2 = document.querySelector(".modal-body2");
    // var mbDiv1 = document.querySelector(".modal-body1 div");
    // var mbDiv2 = document.querySelector(".modal-body2 div");
     
    // TweenLite.to(mbDiv1, 1, {y: '-=25%', delay: 0.2});
    // TweenLite.to(mbDiv2, 1, {y: '+=25%', delay: 0.2});
    // TweenLite.from(mb1, 1, {x: '-50%', ease: Power1. easeInOut, delay: 1.2});
    // TweenLite.from(mb2, 1, {x: '50%', ease: Power1. easeInOut, delay: 1.2});

    
/*----------------------------------------------------
                        name animation
-----------------------------------------------------*/

 
 /*--------------------------------------------------------*/
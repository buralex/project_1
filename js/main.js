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
  
  var text = document.querySelector(selector);
  var textIn = document.querySelector(".quote h3");
  var image = document.querySelector(selectorImage);
  var ang = 0;
  
  text.onclick = rotate;
  image.onclick = rotate;

  function rotate() {
    ang +=180; 
    TweenLite.to(image, 0.8, { rotation: ang });
    TweenLite.to(text, 0.8, { rotation: 180, onComplete: complete});
    TweenLite.set(textIn, { rotationY: 180, rotationX: 180});
    
    function complete(){
      if (ang == 360) {
        TweenLite.set(image, { rotation: 0});
        ang = 0;
      }
      TweenLite.set(text, { rotation: 0});
      TweenLite.set(textIn, { rotationY: 0, rotationX: 0});
    }
  }
}
 /* -----------------------------------------------------------------------------

                               NAME APPEARANCE
  
----------------------------------------------------------------------------- */

function myName() {
  //document.querySelector('.wave').classList.add('animated');
}

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
  
  function getCoords(elem) { // gets coordinates relative to page
    var box = elem.getBoundingClientRect();
  
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  
  }
  
  
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
              TweenLite.from(el, 0.7, {y: '+=70%', autoAlpha: 0});
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
        //console.log(link.children[0].getAttribute("href"));
        
        document.querySelector(nav).classList.toggle(removeClass);
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
                 
                 TweenLite.from(div, 0.7, {y: '+=70%', autoAlpha: 0});
                 
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

    sss.onclick = function(){
        TweenLite.to(window, 2, {scrollTo: 500});
      }
      
/*----------------------------------------------------
                        gates animation
-----------------------------------------------------*/


    var mb1 = document.querySelector(".modal-body1");
    var mb2 = document.querySelector(".modal-body2");
    var mbDiv1 = document.querySelector(".modal-body1 div");
    var mbDiv2 = document.querySelector(".modal-body2 div");
    
    TweenLite.to(mbDiv1, 1, {y: '-=25%', delay: 0.2});
    TweenLite.to(mbDiv2, 1, {y: '+=25%', delay: 0.2});
    TweenLite.to(mb1, 1, {x: '-=100%', ease: Power1. easeInOut, delay: 1.2});
    TweenLite.to(mb2, 1, {x: '+=100%', ease: Power1. easeInOut, delay: 1.2});
    
/*----------------------------------------------------
                        name animation
-----------------------------------------------------*/

function wave() {
  TweenLite.from(document.querySelector(".upper span:nth-child(1)"), 0.5, {y: '+=100%', delay: 0.9, autoAlpha: 0});
  TweenLite.from(document.querySelector(".upper span:nth-child(2)"), 0.5, {y: '+=100%', delay: 0.8, autoAlpha: 0});
  TweenLite.from(document.querySelector(".upper span:nth-child(3)"), 0.5, {y: '+=100%', delay: 0.7, autoAlpha: 0});
  TweenLite.from(document.querySelector(".upper span:nth-child(4)"), 0.5, {y: '+=100%', delay: 0.6, autoAlpha: 0});
  TweenLite.from(document.querySelector(".upper span:nth-child(5)"), 0.5, {y: '+=100%', delay: 0.5, autoAlpha: 0});
  TweenLite.from(document.querySelector(".upper span:nth-child(6)"), 0.5, {y: '+=100%', delay: 0.4, autoAlpha: 0});
  TweenLite.from(document.querySelector(".upper span:nth-child(7)"), 0.5, {y: '+=100%', delay: 0.3, autoAlpha: 0});
  TweenLite.from(document.querySelector(".upper span:nth-child(8)"), 0.5, {y: '+=100%', delay: 0.2, autoAlpha: 0});
  
  TweenLite.from(document.querySelector(".under span:nth-child(1)"), 0.5, {y: '-=100%', delay: 0.2, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(2)"), 0.5, {y: '-=100%', delay: 0.3, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(3)"), 0.5, {y: '-=100%', delay: 0.4, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(4)"), 0.5, {y: '-=100%', delay: 0.5, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(5)"), 0.5, {y: '-=100%', delay: 0.6, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(6)"), 0.5, {y: '-=100%', delay: 0.7, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(7)"), 0.5, {y: '-=100%', delay: 0.8, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(8)"), 0.5, {y: '-=100%', delay: 0.9, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(9)"), 0.5, {y: '-=100%', delay: 1.0, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(10)"), 0.5, {y: '-=100%', delay: 1.1, autoAlpha: 0});
  TweenLite.from(document.querySelector(".under span:nth-child(11)"), 0.5, {y: '-=100%', delay: 1.2, autoAlpha: 0});
  
}

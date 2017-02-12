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

function myName() {
  document.querySelector('.wave').classList.add('animated');
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
                 //TweenLite.to(div, 0.7, {y: 100});
                        //div.classList.remove("slide");
                      //debounce(function() { div.classList.add("slide"); }, 10)();
                              
                }
            }
            // for (var i = 0; i < elms.length; i++) {
            //   var el = elms[i];
            //   doSmth(el);
            // }
            // function  doSmth(el) {
            //   //console.log( "get coords = %i , sum =  %i", getCoords(el).top, st + 600);
            //   //console.log("el.getBoundingClientRect().top = %i", el.getBoundingClientRect().top);
                
            //     el.classList.remove("slide");
            //     debounce(function() { el.classList.add("slide"); }, 10)();
                
                
              
            // }
            })();
         /*--------------- end add animations -----------------*/
        
      });
    };
      
      
      
      
    //   li[i].onclick = function(){
        
    //     console.log(link.children[0]);
        
    //     //var child = document.querySelector('li[i]').classList.toggle(removeClass);
        
    //     document.querySelector(nav).classList.toggle(removeClass);
    //     //document.querySelector(navbar).classList.add(navbarHide);
        
    //     /*--------------- add animations for sections (self-exec) -----------------*/
    //     (function addAnimCl(elem, classAnim) {
          
    //         var elms = document.querySelectorAll(".slideanim");  // array of li elements
    //         for (var i = 0; i < elms.length; i++) {
    //           var el = elms[i];
    //           doSmth(el);
    //         }
    //         function  doSmth(el) {
    //           //console.log( "get coords = %i , sum =  %i", getCoords(el).top, st + 600);
    //           //console.log("el.getBoundingClientRect().top = %i", el.getBoundingClientRect().top);
                
    //             el.classList.remove("slide");
    //             debounce(function() { el.classList.add("slide"); }, 10)();
                
                
              
    //         }
    //         })();
    // /*--------------- end add animations -----------------*/
        
    //   }
  
}

  /* -----------------------------------------------------------------------------

                               ANIMATE PARTS 
  
----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
                    universal function for animate 
----------------------------------------------------------------------------- */
function animateEl(options) {

  var start = Date.now();

  requestAnimationFrame(function animate() {
   var time = Date.now();
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
  var gtb = document.querySelector("#gtb");
  gtb.onclick = function() {
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
      var gtt = document.querySelector("#gtt");
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
                        add animations
-----------------------------------------------------*/  

    sss.onclick = function(){
        TweenLite.to(window, 2, {scrollTo: 500});
      }
    
    
    
    
    
    
/*----------------------------------------------------
                        going-up elements
-----------------------------------------------------*/
// function slideArticle(articleSelector) {
//   var lastScrollTop = 0;
//   var delta = 5;
//   var articles = document.querySelectorAll(articleSelector);
  
//   window.addEventListener("scroll", function() { 



// for (var i = 0; i < articles.length; i++) {
//                 var article = articles[i];
                
//               }


// var	d = window.innerHeight ;
//                     var	d2 = window.innerHeight - 100;
//                     var coordTop = article.getBoundingClientRect().top;
                    
//                     	if (coordTop < d/2 ) {
                    	  
                    

//       animateEl({
//         duration: 2000,
//         timing: function(timeFraction) {
//           return  Math.pow(timeFraction, 0.3);
//         },
//         draw: function(progress) {
//                                               // self-executing function articleUp
//             (function articleUp(article) {
             
//               for (var i = 0; i < articles.length; i++) {
//                 var article = articles[i];
//                 hasScrolled( article );
//               }
   
//             function hasScrolled(article) {
              
//               var st = Math.max(document.body.scrollTop , window.pageYOffset,  document.documentElement.scrollTop);
//               var windHeight = Math.max( document.documentElement.clientHeight, window.innerHeight );
//               var documHeight = Math.max(document.body.offsetHeight, document.body.scrollHeight );
          
//               if(Math.abs(lastScrollTop - st) <= delta) return;
           
//               if (st > lastScrollTop ){
//                 // Scroll Down
                
//                   /*-------------------------- sliding parts -------------------------------------*/
//                 console.log(progress);
//                 //console.log("a  = " + article.getBoundingClientRect().top);
//                 		// var	d = window.innerHeight ;
//                   //   var	d2 = window.innerHeight - 100;
//                   //   var coordTop = article.getBoundingClientRect().top;
                    
//                   //   	if (coordTop < d/2 ) {
                    	  
//                     	    var y = (1 - progress) * (coordTop - 50);
//                             window.scrollTo(0, y);
                            
//                             //console.log( document.body.scrollTop, 1 - progress);
                         
//                       //window.scrollBy(0, article.getBoundingClientRect().top);
//                       	//window.scrollTo(0, gtt.getBoundingClientRect().top);
                      
                    
                    
//                 /*-------------------------- end sliding parts -------------------------------------*/
//               } else {
//                 // Scroll Up
//                 }
                
//                 lastScrollTop = st;
//               }
          
              
//             })();
            
          
//         }
//       });
//   }
// } );

// }

// function slideArticle(articleSelector) {
//   var lastScrollTop = 0;
//   var delta = 5;
//   var articles = document.querySelectorAll(articleSelector);
  
//   window.addEventListener("scroll", function() { 



//       animateEl({
//         duration: 2000,
//         timing: function(timeFraction) {
//           return  Math.pow(timeFraction, 0.3);
//         },
//         draw: function(progress) {
//                             // var y = (1 - progress) * (coordTop - 50);
//                             //window.scrollTo(0, 5);           
//         }      
//   } );

// } );
// }





  
  
  
 

    
   
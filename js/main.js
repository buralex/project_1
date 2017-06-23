 "use strict";

 /* -----------------------------------------------------------------------------
                             heights of first block
----------------------------------------------------------------------------- */
function starting() {
 
  
  document.querySelector('.wave').classList.add('animated');
  document.querySelector('.fly1').classList.add('animated');
  
  
  
  
    
    function calcHeight() {
      //window.outerHeight
      var vheight = Math.max( document.documentElement.clientHeight, window.innerHeight );
      var views = document.querySelectorAll('.cont-view');
      
      for ( var i  = 0; i < views.length; i++ ) {
        var view = views[i];
        view.style.height = vheight + "px"
      }
      
      //var name = document.querySelector('.wave');
      var nameH = parseFloat(getComputedStyle(document.querySelector('.wave')).height),
          cubeH = parseFloat(getComputedStyle(document.querySelector('.box-wrap')).height),
          aboutH = parseFloat(getComputedStyle(document.querySelector('.about-content')).height),
          projectsH = parseFloat(getComputedStyle(document.querySelector('.projects-content')).height),
          contactH = parseFloat(getComputedStyle(document.querySelector('.contact-content')).height);
      
      if (vheight > 500) {
        document.querySelector('.wave').style.marginTop = ((vheight - 50)/2 - nameH)/2 + 'px';
        document.querySelector('.wave').style.marginBottom = ((vheight - 50)/2 - nameH)/2 + 'px';
      }
      if (vheight > 500) {
        document.querySelector('.box-wrap').style.marginTop = ((vheight - 50)/2 - cubeH)/2 + 'px';
        document.querySelector('.box-wrap').style.marginBottom = ((vheight - 50)/2 - cubeH)/2 + 'px';
      }
      if (vheight > aboutH) {
        document.querySelector('.about-content').style.marginTop = ((vheight) - aboutH)/2 + 'px';
        document.querySelector('.about-content').style.marginBottom = ((vheight) - aboutH)/2 + 'px';
      }
      if (vheight > projectsH) {
        document.querySelector('.projects-content').style.marginTop = ((vheight) - projectsH)/2 + 'px';
        document.querySelector('.projects-content').style.marginBottom = ((vheight) - projectsH)/2 + 'px';
      }
      if (vheight > contactH) {
        document.querySelector('.contact-content').style.marginTop = ((vheight) - contactH)/2 + 'px';
        document.querySelector('.contact-content').style.marginBottom = ((vheight) - contactH)/2 + 'px';
      }

        /*--------- triangles -------------*/

        var aboutWrap = document.querySelector('.about-wrap');
        var patternAbout = Trianglify({
            height: aboutWrap.offsetHeight,
            width: aboutWrap.offsetWidth,
            x_colors: ["#e5effa", "#ceddf8", "#8cadde", "#5e8bd9", "#3549d0","#2839a9","#3549d0","#5e8bd9","#8cadde","#ceddf8","#e5effa"],
            cell_size: 60
        });

        var oldAbout = document.querySelector('.about-svg');
        if (oldAbout) {
            oldAbout.parentNode.removeChild(oldAbout);
        }

        var aboutBgElement = patternAbout.svg();
        aboutBgElement.style.cssText = 'position: absolute; top: 0; height: 100%;';
        aboutBgElement.classList.add('about-svg');
        aboutWrap.appendChild(aboutBgElement);


        var contactWrap = document.querySelector('.contact-wrap');
        var pattern = Trianglify({
            height: contactWrap.offsetHeight,
            width: contactWrap.offsetWidth,
            x_colors: ["#e5effa", "#ceddf8", "#8cadde", "#5e8bd9", "#3549d0","#2839a9","#3549d0","#5e8bd9","#8cadde","#ceddf8","#e5effa"],
            cell_size: 60
        });

        var oldContact = document.querySelector('.contact-svg');
        if (oldContact) {
            oldContact.parentNode.removeChild(oldContact);
        }

        var bgElement = pattern.svg();
        bgElement.style.cssText = 'position: absolute; top: 0; height: 100%;';
        bgElement.classList.add('contact-svg');
        contactWrap.appendChild(bgElement);

        /*--------- /triangles -------------*/

    }
    calcHeight();
    window.addEventListener("resize", debounce(function() { calcHeight() }, 10));

  
}

/**/
Function.prototype.throttle = function (milliseconds) {
    var baseFunction = this,
        lastEventTimestamp = null,
        limit = milliseconds;

    return function () {
        var self = this,
            args = arguments,
            now = Date.now();

        if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
            lastEventTimestamp = now;
            baseFunction.apply(self, args);
        }
    };
};
/**/

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
      
      
     /*--------------- add animations for sections (self-exec) -----------------*/
     (function addAnimCl(elem, classAnim) {
      
        var elms = document.querySelectorAll(".slideanim");  // array of li elements
        for (var i = 0; i < elms.length; i++) {
          var el = elms[i];
          doSmth(el);
        }
        function  doSmth(el) {
          
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
        
        document.querySelector(nav).classList.remove(removeClass);
        document.querySelector(navbar).classList.add(navbarHide);
        
        var anchor = link.children[0].getAttribute("href");
        
        /*--------------- add animations for sections (self-exec) -----------------*/
        (function addAnimCl(classAnim) {
          
            var anchorAll = anchor + " *";
            
            var elms = document.querySelectorAll(anchorAll);  // array of li elements
           
            
            for (var i = 0; i < elms.length; i++) {
              var div = elms[i];
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



    // var mb1 = document.querySelector(".modal-body1");
    // var mb2 = document.querySelector(".modal-body2");
    // var mbDiv1 = document.querySelector(".modal-body1 div");
    // var mbDiv2 = document.querySelector(".modal-body2 div");
     
    // TweenLite.to(mbDiv1, 1, {y: '-=25%', delay: 0.2});
    // TweenLite.to(mbDiv2, 1, {y: '+=25%', delay: 0.2});
    // TweenLite.from(mb1, 1, {x: '-50%', ease: Power1. easeInOut, delay: 1.2});
    // TweenLite.from(mb2, 1, {x: '50%', ease: Power1. easeInOut, delay: 1.2});

    
/*----------------------------------------------------
                        galary animation
-----------------------------------------------------*/
function gallery(elSel) {
  
  var nodes  = document.querySelectorAll(elSel),
    _nodes = [].slice.call(nodes, 0);

var getDirection = function (ev, obj) {
    var w = obj.offsetWidth,
        h = obj.offsetHeight,
        x = (ev.clientX - obj.getBoundingClientRect().left - (w / 2) ),
        y = (ev.clientY - obj.getBoundingClientRect().top - (h / 2) ),
        d ;
  var angle = Math.atan(h/w)/(Math.PI / 180);
  var pointAngle = Math.abs(Math.atan(y/x)/(Math.PI / 180));
  var angle2 = Math.atan(w/h)/(Math.PI / 180);
  var pointAngle2 = Math.abs(Math.atan(x/y)/(Math.PI / 180));
  
  if (y<0 && angle < pointAngle) {d = 0;}
  if (x>0 && angle2 < pointAngle2) {d = 1;}
  if (y>0 && angle < pointAngle) {d = 2;}
  if (x<0 && angle2 < pointAngle2) {d = 3;}
    return d;
};

var addClass = function ( ev, obj, state ) {
    var direction = getDirection( ev, obj ),
        class_suffix = "";
    
    obj.className = "";
    // obj.classList.remove( 'in-top' );
    // obj.classList.remove( 'in-right' );
    // obj.classList.remove( 'in-bottom' );
    // obj.classList.remove( 'in-left' );
    // obj.classList.remove( 'out-top' );
    // obj.classList.remove( 'out-right' );
    // obj.classList.remove( 'out-bottom' );
    // obj.classList.remove( 'out-left' );
    
    switch ( direction ) {
        case 0 : class_suffix = '-top';    break;
        case 1 : class_suffix = '-right';  break;
        case 2 : class_suffix = '-bottom'; break;
        case 3 : class_suffix = '-left';   break;
    }
    
    obj.classList.add( state + class_suffix );
};

  // bind events
  _nodes.forEach(function (el) {
      el.addEventListener('mouseover', function (ev) {
          addClass( ev, this, 'in' );
      }, false);
  
      el.addEventListener('mouseout', function (ev) {
          addClass( ev, this, 'out' );
      }, false);
  });
  
}


/*----------------------------------------------------
                        visit animation
-----------------------------------------------------*/
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);


function visit(elSel) {
var nodes  = document.querySelectorAll(elSel),
    _nodes = [].slice.call(nodes, 0);
var shad  = document.querySelector('.visit__shadow');
var cont = document.querySelector('.visit__padding');

var getDirection = function (ev, obj) {
	
	
	var w = obj.offsetWidth,
      h = obj.offsetHeight,
      x = (ev.clientX - obj.getBoundingClientRect().left - (w / 2) ),  // coordinate 'x' from center of element
      y = (ev.clientY - obj.getBoundingClientRect().top - (h / 2) ),   // coordinate 'y' from center of element
	    xS = (ev.clientX - obj.getBoundingClientRect().left ),	// coordinate 'x' from left of element (for Shadow)
      yS = (ev.clientY - obj.getBoundingClientRect().top ),
      d, yNew, xNew, xShad, yShad ;
	
			yNew = -( (y*6) / (h/2));
			xNew = (x*6) / (w/2);
			xShad = 30 + Math.abs((xS*30) / w);
			yShad = 20 + Math.abs((yS*40) / (h));
	
		obj.style.cssText = "transform: rotateX(" + yNew + "deg) rotateY(" + xNew + "deg);-webkit-transform: rotateX(" + yNew + "deg) rotateY(" + xNew + "deg);-moz-transform: rotateX(" + yNew + "deg) rotateY(" + xNew + "deg)";
		
		  shad.style.cssText = "background-image: -webkit-linear-gradient(" + xShad + "deg, rgba(0, 0, 0, 0.5), transparent " + yShad +"%);" + "background-image: linear-gradient(" + xShad + "deg, rgba(0, 0, 0, 0.5), transparent " + yShad +"%);";

};


  // bind events
  _nodes.forEach(function (el) {
    
    if (true){
      el.addEventListener('mousemove', function (ev) {
          getDirection(ev, this);
      }.throttle(20), false);
    }
      
      
    //   $(el).mousemove(function(event){
    //     getDirection(event, this);
    // }.throttle(20));
    

  	
  	$(el.parentElement).mouseleave(function(){
  		document.querySelector('.visit').style.cssText = "-webkit-transition: 0.5s; transition: 0.5s;";
  		
  		 
  		   shad.style.cssText = "background-image: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent 40%); background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent 40%);";
  		
  		
  	});
  
  });


}

/*--------------------------------------------------------*/

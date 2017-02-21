<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Alexandr Burlachenko</title>
  <meta charset="utf-8">
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/main.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link rel="icon" type="image/png" href="favicon.png">
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  
  

</head>
<body id="myPage"  data-spy="scroll" data-target=".navbar" data-offset="60" >

  <select id="langSwitch" onchange="myFunction2(this.value)">
    <option value="en">en</option>
    <option value="ru">ru</option>
  </select>  
 
  <div id="div1">
    <?php
      require_once "includes.php";
    ?>
  </div>
  



<script>
//   var str = "en";
//   showUser("en");
// function showUser(str) {
//     if (str == "en") {
//             if (window.XMLHttpRequest) {
//             // code for IE7+, Firefox, Chrome, Opera, Safari
//             xmlhttp = new XMLHttpRequest();
//         } else {
//             // code for IE6, IE5
//             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         xmlhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 document.querySelector("div").innerHTML = this.responseText;
//             }
//         };
//         xmlhttp.open("GET","components_en.php",true);
//         xmlhttp.send();
//     } else if (str == "ru")  {
//         if (window.XMLHttpRequest) {
//             // code for IE7+, Firefox, Chrome, Opera, Safari
//             xmlhttp = new XMLHttpRequest();
//         } else {
//             // code for IE6, IE5
//             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         xmlhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 document.querySelector("div").innerHTML = this.responseText;
//             }
//         };
//         xmlhttp.open("GET","components_ru.php",true);
//         xmlhttp.send();
//     }
// }


</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenLite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/plugins/CSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/plugins/ScrollToPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js"></script>
<script src="js/main.js"></script>


<script>

    
    document.querySelector('.bg-photo-wrap').classList.add('animated');
    document.querySelector('.modal-body1').classList.add('animated');
    document.querySelector('.modal-body2').classList.add('animated');
    document.querySelector('.modal-body1 div').classList.add('animated');
    document.querySelector('.modal-body2 div').classList.add('animated');

function initialise(){

  starting();
  
  
document.querySelector('#langSwitch').onchange = function(){myFunction2(this.value)};
 
function myFunction2(str) {
  //console.log(str);
  if ( str == "en" ) {
    $("#div1").load("includes.php?q=en");
  }
  if ( str == "ru" ) {
    $("#div1").load("includes.php?q=ru");
  }
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
}    
    
$(document).ready(function(){
    
    initialise();
});
$(document).ajaxComplete(function () {
    initialise();
}); 
       
       

       
</script>



</body>
</html>

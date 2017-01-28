<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Alexandr Burlachenko</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/main.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link rel="icon" type="image/png" href="favicon.png">
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
  
  </style>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Web developer</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">WHO</a></li>
        <li><a href="#">WHAT</a></li>
        <li><a href="#">WHERE</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- First Container -->
<div class="container-fluid bg-1 text-center ">
  
  <div class="col-xs-12 col-md-12 col-lg-5 text-right outl-red">
    <span class="my-name">Alexandr</span>
  </div>
  <div class="col-xs-2 logo-container text-cente outl-red">
    <div class="logo-wrap">
      <img src="img/logo_3.svg" class="img-responsive logo" alt="logo" width="150" height="150">
    </div>
  </div>
  <div class="col-xs-12 col-md-12 col-lg-5 text-left outl-red">
    <span class="my-name">Burlachenko</span>
  </div>
  
  <div class="row">
    
    <div class="bg-photo-wrap ">
      <div class="bg-top"></div>
      <div class="bg-bottom"></div>
    </div>
  </div>
  <div class="col-xs-12">
    <h3>I'm an adventurer</h3>
  </div>
  
</div>

<!-- Second Container -->
  <div class="container-fluid bg-2 text-center ">
  <div class="card-wrap">
    <div class="card effect__click ">
      <div class="card__front ">
        <img src="img/i_front.jpg" alt="my-photo" class="my-photo img-responsive ">
      </div>
      <div class="card__back ">
        <img src="img/i_back.jpg" alt="my-photo" class="my-photo img-responsive ">
      </div>
    </div>
  </div>
  <div class="col-xs-12">
    <h3 class="margin">Since I wrote my first "tag", my life has overturned 180 degrees.</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <a href="#" class="btn btn-default btn-lg">
      <span class="glyphicon glyphicon-search"></span> Search
    </a>
  </div>
  
</div>

<!-- Third Container (Grid) -->
<div class="container-fluid bg-3 text-center">    
  <h3 class="margin">Where To Find Me?</h3><br>
  <div class="row">
    <div class="col-sm-4 outl-red">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds1.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-4 outl-red mid"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds2.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-4 outl-red"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds3.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
  </div>
</div>
<div class="night">
  
</div>

<!-- Footer -->
<footer class="container-fluid bg-4 text-center">
  <p>Bootstrap Theme Made By <a href="http://www.w3schools.com">www.w3schools.com</a></p> 
</footer>


<script src="js/main.js"></script>

<script>
    
      $(document).ready(function(){
        var my_photo = flipCard;
        my_photo(".card.effect__click");
        
      });
       
    </script>

</body>
</html>

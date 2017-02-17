<?php
  $q = strtolower(strip_tags(trim($_GET['q'])));
?>
<div class="modal-body1"><div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
<div class="modal-body2"><div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>


  <!-- Navbar -->
    <?php 
      switch($q){
        case 'en':
          include 'inc/en/navbar_en.php';
          break; 
        case 'ru': 
          include 'inc/ru/navbar_ru.php'; 
          break; 
        default: 
          include 'inc/en/navbar_en.php'; 
      } 
    ?>
    <!-- end Navbar -->
<div class=" cont-persp">    
  <!-- First Container -->
  
  <div class="container-fluid bg-1 text-center ">
    <div class="row">
      <div class="bg-photo-wrap ">
        <div class="mask"></div>
        <div class="row parent">
          
          <div class="wave ">
            <?php 
            switch($q){
              case 'en':
                include 'inc/en/wave_en.php';
                break; 
              case 'ru': 
                include 'inc/ru/wave_ru.php'; 
                break; 
              default: 
                include 'inc/en/wave_en.php'; 
            } 
          ?> 
          <div class="fly1 col-xs-12">web developer</div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
  
  
    <div class="container-fluid stage">
     <div class="row">
        <div class="line"></div>
            
       
       <div id="box">
           <div class="box">
                 <div class="side side1">1 </div>
                 <div class="side side2">2</div>
                   <div class="side side3">3</div>
                   <div class="side side4">4</div>
                 <div class="side side5">5 </div>
                   <div class="side side6">6</div>
             </div>
       </div>
       <div class="bot-wrap">
          <div class="line-bot"></div>
        </div>
     </div>
    </div>
    
    
  
  
</div>


<!-- Second Container -->
<div id="about" class="container-fluid bg-2 text-center ">
  <div class="row">
    <div class="line-bg-2"></div>
    <div class="card-wrap text-center">
      <div class="card ">
        <div class="card__front ">
          <img src="img/i_front.jpg" alt="my-photo" class="my-photo img-responsive ">
        </div>
        <div class="card__back ">
          <img src="img/i_back.jpg" alt="my-photo" class="my-photo img-responsive ">
        </div>
      </div>
    </div>
    <div class="col-xs-12 fadeUp">
      <div class="face"></div>
      <div class="quote">
        <h3 class=" ">Ever since I wrote first "tag", my life has made a complete <span>180&#176</span> turn.</h3>
      </div>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <a href="#" class="btn btn-default btn-lg">
        <span class="glyphicon glyphicon-search"></span> Search
      </a>
    </div>
  </div>
</div>

<button id="gtb" style="z-index: 999"> go to botom )</button>
<button id="gtt" style="z-index: 999"> go to top )</button>
<button id="stickTop" class="stickTop" style="z-index: 999">this.scrollIntoVifsdfdsfdsfsdfsdfsdfew(fasdfdsfsdfsdfsdfsdfdslse)</button>

<!-- Third Container (Grid) -->
<div id="projects" class="container-fluid bg-3 text-center">    
  <h3 class="margin">projects?</h3><br>
  <div class="row ">
    <div class="col-sm-4 outl-red slideanim">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds1.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-4 outl-red mid slideanim"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds2.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-4 outl-red slideanim"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds3.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
  </div>
  
</div>

<!-- fourth Container (Grid) -->
<div id="contact" class="container-fluid bg-3 text-center">    
  <h3 class="margin">contact?</h3><br>
  <div class="row">
    <div class="col-sm-4 outl-red slideanim">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds1.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-4 outl-red mid slideanim"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds2.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-4 outl-red slideanim"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds3.jpg" class="img-responsive margin" style="width:100%" alt="Image">
    </div>
  </div>
</div>


<div class="night">  </div>


<!-- Footer -->
<footer class="container-fluid bg-4 text-center">
  <p> Made By <a href="#"> Me </a></p> 
</footer>


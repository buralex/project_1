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
    <div class="row ">
      <div class="bg-photo-wrap ">
        <div class="mask"></div>
        <div class="row parent">
          
          <div class="wave ">
            <div class="main ">
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
  </div>
  
  
    <div class="container-fluid stage">
     <div class="row">
        <div class="line"></div>
            
       
       <div id="box">
           <div class="box">
                 <div class="side side1">WP</div>
                 <div class="side side2">HTML</div>
                   <div class="side side3">PHP</div>
                   <div class="side side4">CSS</div>
                 <div class="side side5">JS</div>
                   <div class="side side6">MySQL</div>
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
    
    <div class="main cont-persp">
      
      <div class="col-xs-12 about-content">
        <h3 class="margin">About</h3>
        <div class="face"></div>
        <div class="quote">
          <h2 class=" ">&quot;Ever since I wrote first 'tag', my life has made a complete <span>180&#176</span> turn.&quot;</h2>
        </div>
        <h3>I'm a web developer who works with all the usual web technologies (HTML, CSS, Javascript, PHP, MySQL, AJAX ...).</h4>
        <h3>I like working in team and writing  maintainable and efficient code for solving interesting tasks.</h3>
        
      </div>
    </div>
  </div>
</div>



<!-- Third Container (Grid) -->
<div id="projects" class="container-fluid bg-3 text-center">    
  <h3 class="margin">Projects</h3><br>

  

</div>

<div class="gallery-box">
  <ul>
    <li class="frame">
      <a href="" class="info">
        <h3>Single-origin coffee whatever</h3>
        <p>Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts.</p>  <img src="" alt="" />
      </a>
    </li>
    <li class="frame">
      <a href="" class="info">
        <h3>Single-origin coffee whatever</h3>
        <p>Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts.</p>  <img src="" alt="" />
      </a>
    </li>
    <li class="frame">
      <a href="" class="info">
        <h3>Single-origin coffee whatever</h3>
        <p>Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts.</p>  <img src="" alt="" />
      </a>
    </li>
    
  </ul>

  </div>


<!-- fourth Container (Grid) -->
<div id="contact" class="container-fluid bg-3 text-center">    
  <h3 class="margin">Contact</h3><br>
  <div class="row">
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
  <p> Made By <a href="#myPage"> Me </a></p> 
</footer>


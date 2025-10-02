const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.nav-links .close');

// Open menu
hamburger.addEventListener('click', () => {
  navLinks.classList.add('show');
});

// Close menu
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
});



  //  <div class="top">
  //       <img class="top-cloud"
  //           src="/img/cloud.png"
  //           alt="cloud-image">
          
  //               <div class="about-hero">
  //        <!-- <div class="about-hero-img-1 img-part" data-speed="-0.5" data-move="1">
  //           <img class="about-hero-img" src="/img/about-3.jpg" alt="">
  //       </div> -->
  //       <!-- <div class="about-hero-img-2 img-part" data-speed="-1" data-move="1">
  //           <img class="about-hero-img" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/346/cloud_2601-fe0f.png" alt="">
  //       </div>  -->
     
  //       <div class="about-hero-img-3 img-part" data-speed="-0.5" data-move="1">
  //           <img class="about-hero-img" src="img/crop.png" alt="">
  //       </div>
  //   </div>
       
  //       <img class="bottom-cloud"
  //           src="/img/cloud.png"
  //           alt="cloude-image">
      
        
  //   </div>
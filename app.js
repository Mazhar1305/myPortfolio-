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





  // (function(){
  //   emailjs.init("T_BfHMu9RScB306oE"); // Replace with your EmailJS User ID
  // })();

  // const form = document.getElementById('contactForm');
  // form.addEventListener('submit', function(e){
  //   e.preventDefault(); // prevent page reload

  //   emailjs.sendForm('service_r61srq7', 'template_676hlx8', this)
  //     .then(() => {
  //       alert('Message sent successfully!');
  //       form.reset();
  //     }, (err) => {
  //       alert('Oops! Something went wrong: ' + JSON.stringify(err));
  //     });
  // });


  
  (function(){
    emailjs.init("T_BfHMu9RScB306oE"); // Your EmailJS User ID
  })();

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    emailjs.sendForm('service_r61srq7', 'template_676hlx8', this)
      .then(() => {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for contacting me. I’ll get back to you soon.',
          icon: 'success',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#66BFBF'
        });
        form.reset();
      }, (err) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#ff4d4d'
        });
      });
  });


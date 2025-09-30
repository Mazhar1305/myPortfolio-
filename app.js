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

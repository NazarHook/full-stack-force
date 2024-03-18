document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.nav ul');

  function toggleMenu() {
    if (navLinks.style.display === 'none') {
      navLinks.style.display = 'block';
    } else {
      navLinks.style.display = 'none';
    }
  }

  menu.addEventListener('click', toggleMenu);
});



document.addEventListener('DOMContentLoaded', function () {
  const orderButton = document.querySelector('.button-active');

  orderButton.addEventListener('click', function() {
      const workTogetherSection = document.getElementById('work-together');
      workTogetherSection.scrollIntoView({ behavior: 'smooth' });
  });
});
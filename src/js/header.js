const menu = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.nav ul li a');
  function toggleLinks() {
    navLinks.forEach(link => {
      if (link.style.display === 'none') {
        link.style.display = 'inline';
      } else {
        link.style.display = 'none';
      }
    });
  }

  menu.addEventListener('click', toggleLinks);


  document.addEventListener('DOMContentLoaded', function () {
    const orderButton = document.querySelector('.button-active');

    orderButton.addEventListener('click', function() {
        const workTogetherSection = document.getElementById('work-together');
     workTogetherSection.scrollIntoView({ behavior: 'smooth' });
    });
});
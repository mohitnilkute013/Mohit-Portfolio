var typed = new Typed('#element', {
  strings: ['Data Scientist', 'Web Developer', 'Data Analyst'],
  typeSpeed: 150,
  // startDelay: 300,
  // shuffle: true,
  backDelay: 600,
  loop: true,
  // loopCount: Infinity,
  // showCursor: false,
});


document.addEventListener("DOMContentLoaded", function () {
  const points = document.querySelectorAll(".point");
  const descriptions = document.querySelectorAll(".description");

  descriptions[0].classList.add("active");
  points[0].classList.add("active");

  points.forEach((point) => {
    point.addEventListener("click", () => {
      const index = point.dataset.index;
      descriptions.forEach((description) => {
        description.classList.remove("active");
      });
      descriptions[index].classList.add("active");

      points.forEach((point) => {
        point.classList.remove("active");
      });
      point.classList.add("active");

    });
  });
});


burger = document.querySelector('.hamburger-icon')
navbar = document.querySelector('nav')
navright = document.querySelector('.ham-show')
line1 = document.querySelector('.line1')
line3 = document.querySelector('.line3')


burger.addEventListener('click', ()=>{
  navright.classList.toggle('visible-resp');
  navbar.classList.toggle('h-resp');
  line1.classList.toggle('line1-rotate');
  line3.classList.toggle('line3-rotate');
});



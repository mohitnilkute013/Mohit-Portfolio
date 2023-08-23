// For Navbar and its Hamburger
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


// For Scrolling Correctly
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.scroll a');
  
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      
      const targetSectionId = link.getAttribute('href');
      const targetSection = document.querySelector(targetSectionId);
      
      if (targetSection) {
        // Calculate the target position, subtract a small value (e.g. 80px for navbar)
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - 65;
        
        // Smoothly scroll to the adjusted target position
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});


// Home Section
// For typing new text
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


// About Me Section
// For Skill Card Height, To change columns in ul
document.addEventListener("DOMContentLoaded", function () {
  const skillCards = document.querySelectorAll(".skill-card");
  
  skillCards.forEach((skillCard) => {
      const ul = skillCard.querySelector("ul");
      const cardHeight = skillCard.clientHeight;

      if (cardHeight > 200) {
          ul.style.columnCount = 2;
      }
  });
});


// Experience Section
// For Showing description of only one timeline point
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


// Projects Section
const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach((flashcard) => {
  const flashul = flashcard.querySelector('ul');
  
  flashcard.addEventListener('mouseenter', () => {
    flashcard.classList.add('flash-resp');
    flashul.style.maxHeight = '1000px';
    // flashul.style.display = 'block';
    flashul.style.visibility = 'visible';
    flashul.style.opacity = '1';
  });
  
  flashcard.addEventListener('mouseleave', () => {
    flashcard.classList.remove('flash-resp');
    flashul.style.maxHeight = '0px';
    // flashul.style.display = 'none';
    flashul.style.visibility = 'hidden';
    flashul.style.opacity = '0';
  });
});


// Footer
// JavaScript code to display total views
// document.addEventListener("DOMContentLoaded", function () {
//   // Replace 'YOUR_TRACKING_ID' with your actual tracking ID
//   const trackingID = 'G-4RLD1YJKW1';
  
//   // Get the 'totalViews' element
//   const totalViewsElement = document.getElementById('totalViews');
  
//   // Use the 'gtag' function to fetch metrics from Google Analytics
//   gtag('event', 'page_view', {
//     send_to: trackingID,
//     event_callback: function () {
//       const totalViews = gtag.get('dataLayer', '0').event_metrics.page_views;
//       totalViewsElement.textContent = 'Total Views: ' + totalViews;
//     }
//   });
// });


// JavaScript code to display total views
// document.addEventListener("DOMContentLoaded", function () {
//   // Replace 'YOUR_TRACKING_ID' with your actual tracking ID
//   const trackingID = 'G-4RLD1YJKW1';
  
//   // Get the 'totalViews' element
//   const totalViewsElement = document.getElementById('totalViews');
  
//   // Use the 'gtag' function to fetch metrics from Google Analytics
//   gtag('event', 'page_view', {
//     send_to: trackingID,
//     event_callback: function () {
//       // Access page views directly from the global 'ga' object
//       const totalViews = gtag.getAll()[0].get('pageviews');
//       totalViewsElement.textContent = 'Total Views: ' + totalViews;
//     }
//   });
// });

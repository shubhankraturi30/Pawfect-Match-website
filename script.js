// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle mobile menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// HERO AUTO SLIDER
const heroSlides = [
  {
    heading: "Meet new and interesting dogs nearby.",
    sub: "Find love for your dog in just one swipe.",
    img: "img/dog-shopping-bag.jpg"
  },
  {
    heading: "Because every dog deserves love.",
    sub: "Smart matching for happy tails.",
    img: "img/istockphoto-1394755518-612x612.jpg"
  },
  {
    heading: "Turn sniffing into matching.",
    sub: "Your dog's soulmate is waiting.",
    img: "img/istockphoto-464695610-612x612.jpg"
  }
];

let heroIndex = 0;

const heroHeading = document.getElementById("heroHeading");
const heroSub = document.getElementById("heroSub");
const heroImage = document.getElementById("heroImage");

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroImage.style.opacity = 0;

  setTimeout(() => {
    heroHeading.textContent = heroSlides[heroIndex].heading;
    heroSub.textContent = heroSlides[heroIndex].sub;
    heroImage.src = heroSlides[heroIndex].img;
    heroImage.style.opacity = 1;
  }, 400);
}, 3500);

function openForm() {
  window.open("signup.html", "_blank");
}

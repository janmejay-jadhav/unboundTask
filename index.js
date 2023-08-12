const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".move");

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const collapse = document.getElementsByClassName("collapse")[0];
const burgerMenu = document.getElementsByClassName("burger-menu")[0];

let currentIndex = 0;

function slideTo(index) {
  if (index < 0) {
    index = 0;
  } else if (index >= images.length) {
    index = images.length - 2;
  }

  currentIndex = index;
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translateX(-${currentIndex * 40}%)`;
  }
}

function nextSlide() {
  slideTo(currentIndex + 2);
}

function prevSlide() {
  slideTo(currentIndex - 2);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
burgerMenu.addEventListener("click", () => {
  if (collapse.style.display === "none") collapse.style.display = "block";
  else collapse.style.display = "none";
});

slideTo(currentIndex);

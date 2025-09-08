import "./style.css";

import img1 from "./images/img1.avif";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.avif";
let currentIndex = 0;
const slideImgs = document.querySelectorAll(".carousel-slide img");
slideImgs[0].src = img1;
slideImgs[1].src = img2;
slideImgs[2].src = img3;
slideImgs[3].src = img4;
slideImgs[4].src = img5;

const leftBtn = document.querySelector(".carousel-button-left");
const rightBtn = document.querySelector(".carousel-button-right");
const carouselTrack = document.querySelector(".carousel-track");
const allSlides = document.querySelectorAll(".carousel-slide");

leftBtn.addEventListener("click", function () {
  moveToPrevSlide();
});

rightBtn.addEventListener("click", function () {
  moveToNextSlide();
});
function moveToNextSlide() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= allSlides.length) {
    currentIndex = 0;
  }
  let slideWidth = allSlides[0].getBoundingClientRect().width;
  carouselTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
} //→ moves to the next slide

function moveToPrevSlide() {
  //→ moves to the previous slide
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = allSlides.length - 1;
  }
  let slideWidth = allSlides[0].getBoundingClientRect().width;
  carouselTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

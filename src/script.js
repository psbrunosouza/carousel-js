const carousel = document.querySelector(".carousel");
const imgs = document.querySelectorAll("img");
const arrowIcons = document.querySelectorAll(".arrow");

const firstImage = imgs[0];

let isDragStart = false;
let prevPageX;
let prevScrollX;
let firstImageWidth = firstImage.clientWidth + 14;

arrowIcons.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    carousel.scrollLeft += arrow.id === "left" ? -firstImageWidth : firstImageWidth;
  })
})

imgs.forEach((img) => {
  img.ondragstart = () => {
    return false;
  };
})

// Função para realizar o drag do element
carousel.addEventListener("mousedown", (event) => {
  isDragStart = true;
  prevPageX = event.pageX;
  prevScrollX = carousel.scrollLeft;
});

// Função para realizar o movimento do carousel 
carousel.addEventListener("mousemove", (event) => {
  if (!isDragStart) return;
  let direction = event.pageX - prevPageX;
  carousel.scrollLeft = prevScrollX - direction;
});

// Função para desativar o drag do element
carousel.addEventListener("mouseup", (_event) => {
  isDragStart = false;
});






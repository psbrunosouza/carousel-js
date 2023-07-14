const carousel = document.querySelector(".carousel");
const imgs = document.querySelectorAll("img");
let isDragStart = false;
let prevPageX;
let prevScrollX;

imgs.forEach((img) => {
  img.ondragstart = () => {
    return false;
  };
})

carousel.addEventListener("mousedown", (event) => {
  isDragStart = true;
  prevPageX = event.pageX;
  prevScrollX = carousel.scrollLeft;
});

carousel.addEventListener("mousemove", (event) => {
  if (!isDragStart) return;

  let direction = event.pageX - prevPageX;
  carousel.scrollLeft = prevScrollX - direction;
});

carousel.addEventListener("mouseup", (event) => {
  isDragStart = false;
});






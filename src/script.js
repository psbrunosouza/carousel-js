const carousel = document.querySelector(".carousel");
const imgs = document.querySelectorAll("img");
const arrows = document.querySelectorAll(".arrow")
const firstImage = imgs[0];

let isDragStart = false;
let isDragging = false;
let prevPageX;
let prevScrollX;
let firstImageWidth = firstImage.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
let direction;


function autoSlide() {
  if(carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth)) return;

  direction = Math.abs(direction);
  let firstImageWidth = firstImage.clientWidth + 14;
  let valDifference  = firstImageWidth - direction;

  if(carousel.scrollLeft > prevScrollX){
    return carousel.scrollLeft += direction > firstImageWidth / 3 ? valDifference : -direction;
  }

  carousel.scrollLeft -= direction > firstImageWidth / 3 ? valDifference : -direction;
}

function showHideIcons() {
  arrows[0].style.display = carousel.scrollLeft === 0 ? 'none' : 'flex';
  arrows[1].style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'flex';
}

function dragStart(event) {
  isDragStart = true;
  prevPageX = event.pageX || event.touches[0].pageX;
  prevScrollX = carousel.scrollLeft;
}

function dragging(event) {
  if (!isDragStart) return;
  carousel.classList.add("dragging");
  event.preventDefault();
  isDragging = true;
  direction = (event.pageX || event.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollX - direction;
  showHideIcons();
}

function dragStop(_event) {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if(!isDragging) return;
  autoSlide();
}

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    carousel.scrollLeft += arrow.id === "left" ? -firstImageWidth : firstImageWidth;
    setTimeout(() => showHideIcons(), 60)
  })
})

imgs.forEach((img) => {
  img.ondragstart = () => {
    return false;
  };
})

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);






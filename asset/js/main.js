const sliderItem = document.querySelectorAll(".slider-item");

for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.left = index * 100 + "%";
}

const sliderItems = document.querySelector(".slider-items");
const arrowRight = document.querySelector(".ri-arrow-right-fill");
const arrowLeft = document.querySelector(".ri-arrow-left-fill");

let i = 0;

arrowRight.addEventListener("click", () => {
  if (i < sliderItem.length - 1) {
    i++;
    // console.log(i);
    slierMove(i);
  }
});

arrowLeft.addEventListener("click", () => {
  if (i <= 0) {
    return false;
  } else {
    i--;
    // console.log(i);
    slierMove(i);
  }
});

// function autoSlider(){
//     if(i <sliderItem.length-1)
//     {
//         i++
//         slierMove(i)
//     }
//     else {
//         i = 0
//     }
// }
function slierMove(i) {
  sliderItems.style.left = -i * 100 + "%";
}
// setInterval(autoSlider, 1000)

// Menubar responsive

const Menubar = document.querySelector(".header-bar-icon");
const HeaderNav = document.querySelector(".header-nav");

Menubar.addEventListener("click", () => {
  HeaderNav.classList.toggle("active");
});

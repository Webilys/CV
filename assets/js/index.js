//----------------------Buttons-------------------------------------------

const btnAboutUs = document.getElementById("btn-about-us");
const btnContact = document.getElementById("button-contact");

btnAboutUs.addEventListener("click", () => {
  window.location.href = "./index.html#a-propos";
});

btnContact.addEventListener("click", () => {
  window.location.href = "./index.html#contact";
});

//----------------------Gallery-------------------------------------------

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 860;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 860;
});

// scrollContainer.addEventListener("wheel", (evt) => {
//   //   evt.preventDefault();
//   //   scrollContainer.scrollLeft += evt.deltaY;
//   //   scrollContainer.style.scrollBehavior = "auto";
// });

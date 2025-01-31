const btnAboutUs = document.getElementById("btn-about-us");
const btnContact = document.getElementById("button-contact");

btnAboutUs.addEventListener("click", () => {
  window.location.href = "./index.html#a-propos";
});

btnContact.addEventListener("click", () => {
  window.location.href = "./index.html#contact";
});

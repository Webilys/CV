//----------------------Buttons-------------------------------------------

const btnAboutUs = document.getElementById("btn-about-us");
const btnContact = document.getElementById("button-contact");
const buttonCallFixed = document.getElementById("button-call-fixed");

btnAboutUs.addEventListener("click", () => {
  window.location.href = "./index.php#a-propos";
});

btnContact.addEventListener("click", () => {
  window.location.href = "./index.php#contact";
});

buttonCallFixed.addEventListener("click", () => {
  window.location.href = "tel:+33666430997";
});

//----------------------Gallery-------------------------------------------
let windowWidth = window.width;
let portfolioSection = document.getElementById("portfolio");
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 856;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 856;
});

function scrollGallery() {
  if (windowWidth > 760) {
    setInterval(() => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 856;
    }, 2500);
  } else {
    setInterval(() => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 311;
    }, 2500);
  }
}

scrollGallery();

// scrollContainer.addEventListener("wheel", (evt) => {
//   //   evt.preventDefault();
//   //   scrollContainer.scrollLeft += evt.deltaY;
//   //   scrollContainer.style.scrollBehavior = "auto";
// });

//----------------- CONTACT -------------------------------------------------------
$(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    $(".comments").empty();

    var postdata = $("#contact-form").serialize();

    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: postdata,
      dataType: "json",
      success: function (result) {
        if (result.isSucces) {
          $("#contact-form").append(
            "<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté.</p>"
          );
          $("#contact-form")[0].reset();
        } else {
          $("#firstname + .comments").html(result.firstnameError);
          $("#name + .comments").html(result.nameError);
          $("#email + .comments").html(result.emailError);
          $("#telephone + .comments").html(result.telephoneError);
          $("#message + .comments").html(result.messageError);
        }
      },
    });
  });
});

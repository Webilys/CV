//animation section A propos

const sectionApropos = document.getElementById("a-propos");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionApropos.style.animation =
          "animationEnterSectionApropos 1s linear forwards";
      }
    });
  },
  {
    threshold: 0.3,
  }
);

observer.observe(sectionApropos);

//animation section Skills

const sectionSkills = document.getElementById("skills");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionSkills.style.animation =
          "animationEnterSectionSkills 1s linear forwards";
      }
    });
  },
  {
    threshold: 0.3,
  }
);

observer2.observe(sectionSkills);

//animation section Formations

const sectionFormations = document.getElementById("formations");

const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionFormations.style.animation =
          "animationEnterSectionFormations 1s linear forwards";
      }
    });
  },
  {
    threshold: 0.3,
  }
);

observer3.observe(sectionFormations);

//----------------------Buttons-------------------------------------------

const btnAboutUs = document.getElementById("btn-about-us");
const btnContact = document.getElementById("button-contact");
const buttonCallFixed = document.getElementById("button-call-fixed");

btnAboutUs.addEventListener("click", () => {
  window.open("https://github.com/Webilys", "_blank");
});

btnContact.addEventListener("click", () => {
  window.location.href = "./index.php#contact";
});

buttonCallFixed.addEventListener("click", () => {
  window.location.href = "tel:+33666430997";
});

//----------------------Gallery-------------------------------------------
let portfolioSection = document.getElementById("portfolio");
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  if (window.innerWidth < 760) {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 311;
  } else {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 856;
  }
});

backBtn.addEventListener("click", () => {
  if (window.innerWidth < 760) {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 311;
  } else {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 856;
  }
});

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

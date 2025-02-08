//animation section A propos

const sectionApropos = document.getElementById("a-propos");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionApropos.style.animation =
          "animationEnterSectionApropos 0.7s linear forwards";
      }
    });
  },
  {
    threshold: 0.05,
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
          "animationEnterSectionSkills 0.7s linear forwards";
      }
    });
  },
  {
    threshold: 0.05,
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
          "animationEnterSectionFormations 0.7s linear forwards";
      }
    });
  },
  {
    threshold: 0.05,
  }
);

observer3.observe(sectionFormations);

//animation section Portfolio

const sectionPortfolio = document.getElementById("portfolio");

const observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionPortfolio.style.animation =
          "animationEnterSectionApropos 0.7s linear forwards";
      }
    });
  },
  {
    threshold: 0.05,
  }
);

observer4.observe(sectionPortfolio);

//animation section Contact

const sectionContact = document.getElementById("contact");

const observer5 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionContact.style.animation =
          "animationEnterSectionSkills 0.7s linear forwards";
      }
    });
  },
  {
    threshold: 0.05,
  }
);

observer5.observe(sectionContact);

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

//----------------- CONTACT -------------------------------------------------------
$(document).ready(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    $(".comments").empty();

    var postdata = $("#contact-form").serialize();

    $.ajax({
      type: "POST",
      url: "./php/contact.php",
      data: postdata,
      dataType: "json",
      success: function (result) {
        if (result.isSucces) {
          let thankYouMessage = $(
            "<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté.</p>"
          );
          $("#contact-form").append(thankYouMessage);
          $("#contact-form")[0].reset();

          // Supprimer le message après 5 secondes (5000ms)
          setTimeout(function () {
            thankYouMessage.fadeOut("slow", function () {
              $(this).remove();
            });
          }, 5000);
        } else {
          $("#firstname + .comments").html(result.firstnameError);
          $("#name + .comments").html(result.nameError);
          $("#email + .comments").html(result.emailError);
          $("#telephone + .comments").html(result.telephoneError);
          $("#message + .comments").html(result.messageError);
        }
      },
      error: function () {
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      },
    });
  });
});

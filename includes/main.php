<?php

echo '

<main>
    <div class="container">';

include "./includes/a-propos.php";
// include "./includes/competences.php";

echo '<section class="bsb-skill-2 py-3 py-md-5 py-xl-8">
<div class="container">
  <div class="row">
    <div class="col-12 col-md-10 col-lg-8">
      <h2 class="fs-5 mb-2 text-primary text-uppercase">Skills</h2>
    </div>
  </div>
</div>

<div class="container overflow-hidden">
  <div class="row gy-3 gy-lg-4">
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body p-4 p-xxl-5">
          <div class="row align-items-center">
            <div class="col-12 col-md-7 skill-title">
              <h3 class="fw-bold mb-2">Frontend</h3>
            <ul>
            <li>Langages & Préprocesseurs : HTML, CSS, Sass
           </li>
           <li> Frameworks & Bibliothèques : JavaScript, TypeScript, React, jQuery, Bootstrap
          </li><li> Outils & Build Tools : Webpack, Vite, ESLint, Prettier</li>
            </ul>
            </div>
            <div class="col-12 col-md-5 skill-progress">
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-width-1" role="progressbar" aria-label="Bootstrap" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body p-4 p-xxl-5">
          <div class="row align-items-center">
            <div class="col-12 col-md-7 skill-title">
              <h3 class="fw-bold mb-2">React</h3>
              <p class="text-secondary fst-italic mb-4 mb-md-0">React is a JavaScript library for building user interfaces. It is known for its speed, performance, and scalability.</p>
            </div>
            <div class="col-12 col-md-5 skill-progress">
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-width-2" role="progressbar" aria-label="React" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body p-4 p-xxl-5">
          <div class="row align-items-center">
            <div class="col-12 col-md-7 skill-title">
              <h3 class="fw-bold mb-2">Vue</h3>
              <p class="text-secondary fst-italic mb-4 mb-md-0">Vue is a progressive JavaScript framework for building user interfaces. It is known for its simplicity and flexibility.</p>
            </div>
            <div class="col-12 col-md-5 skill-progress">
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-width-3" role="progressbar" aria-label="Vue" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body p-4 p-xxl-5">
          <div class="row align-items-center">
            <div class="col-12 col-md-7 skill-title">
              <h3 class="fw-bold mb-2">WordPress</h3>
              <p class="text-secondary fst-italic mb-4 mb-md-0">WordPress is a content management system (CMS) that is used to create and manage websites.</p>
            </div>
            <div class="col-12 col-md-5 skill-progress">
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-width-4" role="progressbar" aria-label="WordPress" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>';

include "./includes/formations.php";
include "./includes/portfolio.php";
include "./includes/form-contact.php";
echo '   
    </div>
</main>
';
?>
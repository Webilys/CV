<?php

echo '
<header>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.php">
            <div class="logo">
              <img src="./assets/img/logo.png" alt="Logo Priscilla MEZOUAR" />
            </div>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.php">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#a-propos">À propos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#formations">Formations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
              </li>
            </ul>
            <span class="navbar-text">
              <button class="buttonDegrade" id="button-contact">
                Contacter
              </button>
            </span>
          </div>
        </div>
      </nav>
    </header>
';
?>
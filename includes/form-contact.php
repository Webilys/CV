<?php

echo ' <section id="contact">
<div class="heading">
  <h2 class="mb-4">Contact</h2>
</div>
<div class="row">
  <div class="col-12">
    <form id="contact-form" method="post" action="" role="form" novalidate>
      <div class="row">
        <div class="col-md-6">
          <label for="firstname">Prénom<span class="colorized"> *</span></label>
          <input type="text" name="firstname" id="firstname" class="form-control" placeholder="Votre prénom" required>
          <p class="comments"></p>
        </div>

        <div class="col-md-6">
          <label for="name">Nom<span class="colorized"> *</span></label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Votre nom" required>
          <p class="comments"></p>
        </div>

        <div class="col-md-6">
          <label for="email">Email<span class="colorized"> *</span></label>
          <input type="email" name="email" id="email" class="form-control" placeholder="Votre email" required>
          <p class="comments"></p>
        </div>

        <div class="col-md-6">
          <label for="telephone">Téléphone</label>
          <input type="tel" name="telephone" id="telephone" class="form-control" placeholder="Votre téléphone">
          <p class="comments"></p>
        </div>

        <div class="col-md-12">
          <label for="message">Message<span class="colorized"> *</span></label>
          <textarea id="message" name="message" class="form-control" rows="10" placeholder="Votre message" required></textarea>
          <p class="comments"></p>
        </div>

        <div class="col-md-12">
          <p class="colorized"><strong>* Ces informations sont requises</strong></p>
        </div>

        <div class="col-md-12">
          <input type="submit" class="buttonDegrade" value="Envoyer">
        </div>
      </div>
    </form>
  </div>
</div>
</section>
';
?>

// Affiche au clavier un par un les skills
var typed = new Typed(('.skills-taping'),{
    strings : ['Développement web', 'Montage vidéo' , 'UI/UX Design'],
    typeSpeed : 100 ,
    backSpeed : 100, 
    backDelay: 1000,
    loop : true,
})


const onglets = document.querySelectorAll('.onglet');
const contenus = document.querySelectorAll('.contenu-onglet');

// Ajouter un événement 'click' à chaque onglet
onglets.forEach((onglet, index) => {
    onglet.addEventListener('click', () => {
        // Changer l'onglet actif
        document.querySelector('.active-onglet').classList.remove('active-onglet');
        onglet.classList.add('active-onglet');

        // Masquer tous les contenus
        contenus.forEach(c => c.style.display = 'none');

        // Afficher le contenu correspondant
        contenus[index].style.display = 'block';
    });
});

// Afficher seulement le premier contenu par défaut
contenus.forEach((contenu, i) => {
    contenu.style.display = i === 0 ? 'block' : 'none';
});





// Transmitions des donnés du form vers google shetts
document.addEventListener("DOMContentLoaded", function() {
  // Assure-toi que le DOM est complètement chargé avant d'ajouter l'événement
  const form = document.getElementById("contactForm");

  if (form) {
      form.addEventListener("submit", function(e) {
          e.preventDefault();

          const data = {
              name: form.name.value,
              email: form.email.value,
              message: form.message.value
          };

          fetch("https://script.google.com/macros/s/AKfycby4lcPegbcDJctxTw-x4UcgJWwib5H48usAlDHE2pYZMS_hM7LB7OmWS4T6HXqBRygJfQ/exec", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                  "Content-Type": "application/json"
              }
          })
          .then(res => res.text())
          .then(response => {
              alert("Message envoyé et enregistré !");
              form.reset();
          })
          .catch(error => {
              console.error("Erreur:", error);
              alert("Erreur : " + error.message);
          });
      });
  } else {
      console.error('Formulaire avec l\'ID "contactForm" non trouvé.');
  }
});

  




document.querySelector(".burger").addEventListener("click", ouvrir);

document.querySelector(".overlay2").addEventListener("click", ouvrir);

function ouvrir() {
    document.querySelector("body").classList.toggle("ouvrir")
}
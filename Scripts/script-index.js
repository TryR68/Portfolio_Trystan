// Créer une constante pour chaque élément qu'on veut sélectionner avec un document.querySelector
// const delay = 600;

// window.addEventListener('scroll', () => {
//     if (window.scrollY > delay) {
//         // Ajouter les classes à l'élément (exemple : classe pour changer le fond d'un header)
//         document.querySelector('header').classList.add('header2');
//     }
//     else {
//         // Sinon retirer les classes ajouté par le if au dessus
//         document.querySelector('header').classList.remove('header2');
//     }
// })




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





document.querySelector(".burger").addEventListener("click", ouvrir);

document.querySelector(".overlay2").addEventListener("click", ouvrir);

function ouvrir() {
    document.querySelector("body").classList.toggle("ouvrir")
}
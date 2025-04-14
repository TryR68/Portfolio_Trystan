// Créer une constante pour chaque élément qu'on veut sélectionner avec un document.querySelector
const delay = 600;

window.addEventListener('scroll', () => {
    if (window.scrollY > delay) {
        // Ajouter les classes à l'élément (exemple : classe pour changer le fond d'un header)
        document.querySelector('header').classList.add('header2');
    }
    else {
        // Sinon retirer les classes ajouté par le if au dessus
        document.querySelector('header').classList.remove('header2');
    }
})





var typed = new Typed(('.skills'),{
    strings : ['Développeur web', 'Monteur' , 'UI/UX Design'],
    typeSpeed : 100 ,
    backSpeed : 100, 
    backDelay: 1000,
    loop : true,
})
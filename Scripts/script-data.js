

// // Transmitions des donnés du form vers google shetts
// document.addEventListener("DOMContentLoaded", function() {
//     // Assure-toi que le DOM est complètement chargé avant d'ajouter l'événement
//     const form = document.getElementById("contactForm");
  
//     if (form) {
//         form.addEventListener("submit", function(e) {
//             e.preventDefault();
  
//             const data = {
//                 name: form.name.value,
//                 email: form.email.value,
//                 message: form.message.value
//             };
  
//             fetch("https://script.google.com/macros/s/AKfycby4lcPegbcDJctxTw-x4UcgJWwib5H48usAlDHE2pYZMS_hM7LB7OmWS4T6HXqBRygJfQ/exec", {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             })
//             .then(res => res.text())
//             .then(response => {
//                 alert("Message envoyé et enregistré !");
//                 form.reset();
//             })
//             .catch(error => {
//                 console.error("Erreur:", error);
//                 alert("Erreur : " + error.message);
//             });
//         });
//     } else {
//         console.error('Formulaire avec l\'ID "contactForm" non trouvé.');
//     }
//   });
  
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi classique du formulaire

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const webhookURL = 'https://discord.com/api/webhooks/1369236244306853949/spM-Zw4jxiOa-KZ_HsRS2SkZItmL5b8b9NGHnAZkWOgb5XKW4FvQXYO1BuKS-yXSiZWX'; // Remplace ici

    const payload = {
        content: `📬 **Nouveau message du formulaire de contact**\n\n👤 **Nom**: ${name}\n📧 **Email**: ${email}\n💬 **Message**:\n${message}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("Message envoyé avec succès !");
            document.getElementById('contactForm').reset();
        } else {
            alert("Erreur lors de l'envoi du message.");
        }
    })
    .catch(error => {
        console.error("Erreur réseau : ", error);
        alert("Erreur réseau.");
    });
});

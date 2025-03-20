
const form = document.getElementById('signup-form');
const message = document.getElementById('message');

function isValidDomain(email) {
const domain = email.split('@')[1];
return domain === 'laplateforme.io';
}

form.addEventListener('submit', async (e) =>{
e.preventDefault();

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (!isValidDomain(email)){
    message.textContent = "Seuls les membres de La Plateforme peuvent créer un compte.";
    message.style.color = "red";
    return;
}
if (password.length < 8){
    message.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
    message.style.color = "red";
    return;
}

message.textContent = "Inscription réussie";
message.style.color = "green";

setTimeout(() => {
    window.location.href = "calendrier.html"; 
}, 1000);
});
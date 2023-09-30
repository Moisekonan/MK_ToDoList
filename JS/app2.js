document.addEventListener('DOMContentLoaded', function () {
   // Fonction pour gérer la connexion
   let form = document.getElementById('loginForm');
   form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Récupération des utilisateurs depuis localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Recherche de l'utilisateur dans le tableau
    const user = existingUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Connexion réussie !');
        sessionStorage.setItem('currentUser', username);
        window.location.href = './todo.html';
    } else {
        alert('Identifiant ou mot de passe incorrect.');
    }
});
})
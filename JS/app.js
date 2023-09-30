document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour gérer l'inscription
    let form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Vérification si l'utilisateur existe déjà
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = existingUsers.find(user => user.username === username);

        if (existingUser) {
            alert('Cet utilisateur existe déjà. Veuillez choisir un autre nom d\'utilisateur.');
            return;
        }

        // Ajout du nouvel utilisateur au tableau existant
        existingUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Création d'une liste de tâches vide pour le nouvel utilisateur
        localStorage.setItem(username, JSON.stringify([]));

        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        window.location.href = 'connexion.html';
    });

 
});

// Fonction pour récupérer la liste de tâches de l'utilisateur actuellement connecté
function getUserTasks(username) {
    return JSON.parse(localStorage.getItem(username)) || [];
}

// Fonction pour afficher les tâches de l'utilisateur actuellement connecté
function displayUserTasks() {
    const username = sessionStorage.getItem('currentUser');
    const userTasks = getUserTasks(username);
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    userTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="toggleUserTask(${index})" ${task.completed ? 'checked' : ''}>
            <span>${task.text}</span>
            <button onclick="editUserTask(${index})">Modifier</button>
            <button onclick="deleteUserTask(${index})">Supprimer</button>
        `;
        taskList.appendChild(li);
    });
}

let ad = document.getElementById('addTask');
ad.addEventListener('click', addUserTask) 
// Fonction pour ajouter une nouvelle tâche à la liste de l'utilisateur actuellement connecté
function addUserTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text === '') return;

    const username = sessionStorage.getItem('currentUser'); 
    const userTasks = JSON.parse(localStorage.getItem(username)) || []; 

    const newTask = {
        text,
        completed: false
    };

    userTasks.push(newTask);
    localStorage.setItem(username, JSON.stringify(userTasks)); 
    taskInput.value = '';
    displayUserTasks(); 
}


// Fonction pour basculer l'état d'achèvement d'une tâche de l'utilisateur actuellement connecté
function toggleUserTask(index) {
    const username = sessionStorage.getItem('currentUser');
    const userTasks = getUserTasks(username);

    userTasks[index].completed = !userTasks[index].completed;
    localStorage.setItem(username, JSON.stringify(userTasks));
    displayUserTasks();
}

// Fonction pour modifier une tâche existante de l'utilisateur actuellement connecté
function editUserTask(index) {
    const username = sessionStorage.getItem('currentUser');
    const userTasks = getUserTasks(username);

    const newText = prompt("Modifier la tâche :", userTasks[index].text);
    if (newText !== null) {
        userTasks[index].text = newText;
        localStorage.setItem(username, JSON.stringify(userTasks));
        displayUserTasks();
    }
}

// Fonction pour supprimer une tâche de l'utilisateur actuellement connecté
function deleteUserTask(index) {
    const username = sessionStorage.getItem('currentUser');
    const userTasks = getUserTasks(username);

    userTasks.splice(index, 1);
    localStorage.setItem(username, JSON.stringify(userTasks));
    displayUserTasks();
}

// Fonction pour gérer la déconnexion
let deco = document.getElementById('deco');
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = './connexion.html';
}
deco.addEventListener('click', logout);
displayUserTasks();














// // Récupérer la liste de tâches depuis le stockage local lors du chargement de la page
// const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

// // Afficher les tâches stockées dans la liste
// function displayTasks() {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = '';

//     storedTasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
//             <span>${task.text}</span>
//             <button onclick="editTask(${index})">Modifier</button>
//             <button onclick="deleteTask(${index})">Supprimer</button>
//         `;
//         taskList.appendChild(li);
//     });
// }

// // Ajouter une nouvelle tâche à la liste
// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const text = taskInput.value.trim();

//     if (text === '') return;

//     const newTask = {
//         text,
//         completed: false
//     };

//     storedTasks.push(newTask);
//     localStorage.setItem('tasks', JSON.stringify(storedTasks));
//     taskInput.value = '';
//     displayTasks();
// }

// // Basculer l'état d'achèvement d'une tâche
// function toggleTask(index) {
//     storedTasks[index].completed = !storedTasks[index].completed;
//     localStorage.setItem('tasks', JSON.stringify(storedTasks));
//     displayTasks();
// }

// // Modifier une tâche existante
// function editTask(index) {
//     const newText = prompt("Modifier la tâche :", storedTasks[index].text);
//     if (newText !== null) {
//         storedTasks[index].text = newText;
//         localStorage.setItem('tasks', JSON.stringify(storedTasks));
//         displayTasks();
//     }
// }

// // Supprimer une tâche de la liste
// function deleteTask(index) {
//     storedTasks.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(storedTasks));
//     displayTasks();
// }

// displayTasks(); // Afficher les tâches au chargement de la page
